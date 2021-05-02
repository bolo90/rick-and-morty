import React, { useState } from 'react';
import { CharacterModel } from '../../models/character.model';
import { CardContainer, Image, InfoContainer, Title, StatusInfo, StatusDot, Section, Label, TextLink, DetailLink } from './CharacterCard.styled';
import PlanetSVG from '../../assets/planet.svg';
import PinSVG from '../../assets/pin.svg';
import { device, size } from '../../theme/breakpoints';
import { Row, Col } from '../../theme/grid';
import { fetchDetails, fetchResource } from '../../store/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { Status } from '../../models/types.model';

const CharacterCard = (props: CharacterModel) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState<'expanded' | 'collapsed'>(() => window.innerWidth >= size.md ? 'expanded' : 'collapsed');
  const { episode, gender, image, location, name, origin, species, status, url } = props;

  return (
    <CardContainer>
      <Image src={image} />
      <InfoContainer>
        <Section>
          <Title>{name}<StatusInfo>Sex: {gender} - {status} <StatusDot status={status as Status} /></StatusInfo></Title>
        </Section>
        <Section>
          <Label>Location:</Label>
          <TextLink>{location.name}</TextLink>
        </Section>
        <Section>
          <Label>Origin:</Label>
          <TextLink>{origin.name}</TextLink>
          <DetailLink onClick={() => dispatch(fetchDetails({ type: 'characterDetail', resource: props }))}>More details</DetailLink>
        </Section>
      </InfoContainer>
    </CardContainer>
  );
};

export default CharacterCard;
