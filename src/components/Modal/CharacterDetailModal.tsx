import React from 'react';
import { useSelector } from 'react-redux';
import { Status } from '../../models/types.model';
import { modalState } from '../../store/modal/modalSlice';
import { StatusDot, StatusInfo, Title, Label, Section, InfoContainer, Text, Subtitle } from '../CharacterCard/CharacterCard.styled';
import { CardContainer, Image } from './Modal.styled';

const CharacterDetailModal = () => {
  const { characterDetail, loaded } = useSelector(modalState);
  return (
    <>
      { loaded && characterDetail &&
        <CardContainer>
          <Image src={characterDetail.image} />
          <InfoContainer>
            <Section>
              <Title>{characterDetail.name}
                <StatusInfo>Sex: {characterDetail.gender} - {characterDetail.status}
                  <StatusDot status={characterDetail.status as Status} />
                </StatusInfo>
              </Title>
            </Section>
            <Section>
              <Label>Species:</Label>
              <Text>{characterDetail.species}</Text>
            </Section>

            <Section>
              <Label>Location:</Label>
              <Text>{characterDetail.location.name}</Text>
            </Section>

            <Section>
              <Label>Origin:</Label>
              <Text>{characterDetail.origin.name}</Text>
            </Section>

            <Section>
              <Label>Episodes:</Label>
              {characterDetail.episodesDetail?.map(episode => (
                <>
                  <Text>{episode.name}</Text>
                  <Subtitle><strong>First air date:</strong> {episode.air_date}</Subtitle>
                  <hr/>
                </>
              ))}
            </Section>
          </InfoContainer>
        </CardContainer>
      }
    </>
  );
};

export default CharacterDetailModal;
