import styled from 'styled-components';
import { device } from '../../theme/breakpoints';
import { TextLink, Title } from '../CharacterCard/CharacterCard.styled';

export const CardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  background-color: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* @media ${device.sm} {
    flex-direction: row;
    height: 200px;
  }
  @media ${device.md} {
    flex-direction: column;
    height: 100%;
  } */
`;

export const DetailLink = styled.a`
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  font-weight: bold;
`;

export const EpisodeTitle = styled(Title)`
  height: 66px;
`;

export const CharacterLink = styled(TextLink)`
  text-decoration: underline;
  text-align: center;
  display: block;
  margin: 2px;
`;