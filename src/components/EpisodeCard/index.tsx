import React, { useState } from 'react';
import { EpisodeDetailModel } from '../../models/episode.model';
import { InfoContainer, Label, Section, Text } from '../CharacterCard/CharacterCard.styled';
import Spinner from '../Spinner';
import { CardContainer, CharacterLink, DetailLink, EpisodeTitle } from './EpisodeCard.styled';

interface EpisodeCardProps {
  episode: EpisodeDetailModel;
  fetchDetails: (episode: EpisodeDetailModel) => void;
  loadingDetail: boolean;
  loadedDetail: boolean;
}

const EpisodeCard = (props: EpisodeCardProps) => {
  const { fetchDetails, loadedDetail, loadingDetail } = props;
  const { air_date, characters, name } = props.episode;
  const [expanded, setExpanded] = useState(false);

  const fetchMoreDetails = () => {
    setExpanded(e => !e);
    if (props.episode.charactersDetail) return;
    fetchDetails(props.episode);
  }

  return (
    <CardContainer>
      <InfoContainer>
        <Section>
          <EpisodeTitle>{name}</EpisodeTitle>
        </Section>
        <Section>
          <Label>Air data:</Label>
          <Text>{air_date}</Text>
        </Section>
        <Section>
          <Label>Characters ({characters.length}):</Label>
          <DetailLink onClick={fetchMoreDetails}>{ expanded ? 'Hide' : 'Expand' }</DetailLink>
          {loadingDetail && expanded ? <Spinner color="dark" /> :
            loadedDetail && expanded && props.episode.charactersDetail.map(char => (
              <CharacterLink >{char.name}</CharacterLink>
            ))
          }
        </Section>
      </InfoContainer>
    </CardContainer>
  );
};

export default EpisodeCard;
