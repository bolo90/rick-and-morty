import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { getAllEpisodes, episodeState, getAllEpisodeCharacters } from '../../store/episode/episodeSlice';
import { ContainerFluid } from '../../common/common.styled';
import EpisodeCard from '../../components/EpisodeCard';
import { Row, Col } from '../../theme/grid';
import Spinner from '../../components/Spinner';
import { EpisodeDetailModel } from '../../models/episode.model';

const Episodes = memo(() => {
  const [episodeDetailId, setEpisodeDetailId] = useState(-1);
  const dispatch = useAppDispatch();
  const { episodes, loading, loadedDetail, loadingDetail } = useSelector(episodeState);

  useEffect(() => {
    if (episodes?.info || episodes?.results?.length) {
      return;
    }
    dispatch(getAllEpisodes());
  }, [dispatch, episodes]);

  const fetchDetails = (episode: EpisodeDetailModel) => {
    setEpisodeDetailId(episode.id);
    dispatch(getAllEpisodeCharacters(episode));
  };

  return (
    <ContainerFluid>
      <Row justify="center">
        {
          loading ? <Spinner color="light" />
            :
            episodes?.results.map(episode => (
              <Col xs={24} sm={22} md={12} lg={8} xl={6} key={episode.id}>
                <EpisodeCard episode={episode}
                  loadedDetail={episodeDetailId === episode.id && loadedDetail}
                  loadingDetail={episodeDetailId === episode.id && loadingDetail}
                  fetchDetails={fetchDetails} />
              </Col>
            ))
        }
      </Row>
    </ContainerFluid>
  );
});

export default Episodes;