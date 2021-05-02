import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { getAllCharacter, characterState, loadMoreCharacters } from '../../store/character/characterSlice';
import { ContainerFluid } from '../../common/common.styled';
import CharacterCard from '../../components/CharacterCard';
import FilterMenu from '../../components/FilterMenu';
import { Row, Col } from '../../theme/grid';
import Spinner from '../../components/Spinner';
import { FilterParams } from '../../models/api.model';

const Characters = memo(() => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useSelector(characterState);
  const [filterParams, setFilterParams] = useState<FilterParams>();
  const observer = useRef<IntersectionObserver>();
  
  const fetchMore = useCallback(() => {
    const nextPage = characters?.info.next?.match(/page=((\-|\+)?[0-9]+(\.[0-9]+)?)/);
    if (nextPage && nextPage[1]) {
      const newFilters: FilterParams = { ...filterParams, page: nextPage[1] };
      dispatch(loadMoreCharacters(newFilters));
    }
  }, [dispatch, characters, filterParams]);
  
  const lastElementRef = useCallback(element => {
    // callback function called every time the last element appears into the screen
    if (loading) return; // prevent infinite re-render
    if (observer.current) observer.current.disconnect(); // disconnect current observer to set with the new one
    observer.current = new IntersectionObserver(entries => {
      // get the first entries from the list of observed elements and check if is visible
      if (entries[0].isIntersecting) {
        if (characters && characters.results.length < characters.info.count) {
          fetchMore();
        }
      }
    })

    if (element) observer.current.observe(element);
  }, [loading, characters, fetchMore]);

  useEffect(() => {
    dispatch(getAllCharacter());
  }, [dispatch]);

  useEffect(() => {
    if (filterParams) {
      dispatch(getAllCharacter(filterParams));
    }
  }, [filterParams, dispatch]);

  return (
    <ContainerFluid>
      <FilterMenu filterParams={filterParams} setFilterParams={setFilterParams}/>
      {
        <Row justify="center">
          {characters?.results.map((char, i) => (
            <Col xs={24} sm={22} md={12} lg={8} xl={6} key={char.id}>
              {
                characters.results.length === i + 1 ?
                  <span ref={lastElementRef}><CharacterCard {...char} /></span> :
                  <CharacterCard {...char} />
              }
            </Col>
          ))}
          { loading && <Spinner color="light" />}
        </Row>
      }
    </ContainerFluid>
  );
});

export default Characters;