import styled from 'styled-components';
import { Status } from '../../models/types.model';
import { device } from '../../theme/breakpoints';

export const CardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  background-color: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media ${device.sm} {
    flex-direction: row;
    height: 200px;
  }
  @media ${device.md} {
    flex-direction: column;
    height: 100%;
  }
`;

interface ImageProps {
  src: string;
}

export const Image = styled.div<ImageProps>`
  border-radius: 6px 0 0 6px;
  background-image: ${({ src }) => `url(${src})`};
  height: 200px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.sm} {
    border-radius: 6px 6px 0 0;
    height: 100%;
    width: 100%;
    max-width: 150px;
  }
  @media ${device.md} {
    min-height: 200px;
    width: 100%;
    max-width: unset;
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const InfoContainer = styled.div`
  border-radius: 0 6px 6px 0;
  padding: 10px;
  height: 100%;
  width: 100%;
  background-color: linen;
  @media ${device.sm} {
    border-radius: 0 0 6px 6px;
  }
  ${Section}:not(:last-of-type) {
    margin-bottom: 10px;
    @media ${device.sm} {
      margin-bottom: 10px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-weight: bold;
  margin: 0 0 6px 0;
  &:hover {
    color: '#000';
  }
`;

export const StatusInfo = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
`;

export const StatusDot = styled.div<{ status: Status; }>`
  margin-left: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ status }) => status === 'Alive' ? 'green' : (status === 'Dead' ? 'red' : 'gray')};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.variables.softGray};
  font-size: 16px;
  display: block;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.body};
  font-size: 16px;
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.body};
  font-size: 12px;
`;

export const TextLink = styled.a`
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const DetailLink = styled.a`
  display: block;
  text-align: right;
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
  font-weight: bold;
`;
