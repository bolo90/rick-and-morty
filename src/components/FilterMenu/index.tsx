import { useState, useEffect, memo, useMemo } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Row, Col } from '../../theme/grid';
import { useDispatch } from 'react-redux';
import { FilterParams } from '../../models/api.model';
import { getAllCharacter } from '../../store/character/characterSlice';
import Button from '../button';
import { debounce } from 'lodash';
import { Input } from '../../common/common.styled';
import { Gender, Status } from '../../models/types.model';

interface FilterMenuProps {
  setFilterParams: React.Dispatch<React.SetStateAction<FilterParams | undefined>>;
  filterParams: FilterParams | undefined;
}

const statusItems: Status[] = ['Alive', 'Dead', 'Unknown'];
const genderItems: Gender[] = ['Female', 'Male', 'Genderless', 'Unknown'];

const FilterMenu = memo(({ filterParams, setFilterParams }: FilterMenuProps) => {
  const [status, setStatus] = useState<Status | undefined>();
  const [gender, setGender] = useState<Gender | undefined>();
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();
  const debounceSetFilters = useMemo(() => debounce(name => setFilterParams(f => ({ ...f, name })), 500), [setFilterParams]);

  const resetFilters = () => {
    if (!filterParams) return;
    setFilterParams(undefined);
    setGender(undefined);
    setStatus(undefined);
    setName('');
    dispatch(getAllCharacter());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    debounceSetFilters(value);
  };

  useEffect(() => {
    if (gender) {
      setFilterParams(f => ({ ...f, gender }));
    }
    if (status) {
      setFilterParams(f => ({ ...f, status }));
    }
  }, [gender, status, setFilterParams]);

  return (
    <Row justify="center">
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Dropdown options={statusItems}
          onChange={({ value }) => setStatus(value as Status)}
          value={status}
          placeholder="Status" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Dropdown options={genderItems}
          onChange={({ value }) => setGender(value as Gender)}
          value={gender}
          placeholder="Gender" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Input onChange={handleChange}
          value={name}
          placeholder="Name" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Button label="Reset" onClick={resetFilters}></Button>
      </Col>
    </Row>
  );
});

export default FilterMenu;
