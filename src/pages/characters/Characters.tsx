import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { getAllCharacter, characterState } from '../../store/character/characterSlice';
import { ContainerFluid } from '../../common/common.styled';
import CharacterCard from '../../components/CharacterCard';
import FilterMenu from '../../components/FilterMenu';
import { Row, Col } from '../../theme/grid';
import Spinner from '../../components/Spinner';

const Characters = memo(() => {
  const dispatch = useAppDispatch();
  const { characters, loading, loaded } = useSelector(characterState);
  const observer = useRef<IntersectionObserver>();
  
  const fetchMore = useCallback(() => {
    const page = characters?.info.next?.replace('https://rickandmortyapi.com/api/character?page=', '');
    if (page) {
      dispatch(getAllCharacter({ page }));
    }
  }, [dispatch, characters]);
  
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
    if (characters?.info || characters?.results?.length) {
      return;
    }
    dispatch(getAllCharacter());
  }, [dispatch, characters]);



  return (
    <ContainerFluid>
      <FilterMenu />
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