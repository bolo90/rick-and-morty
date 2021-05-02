import styled from 'styled-components';
import { device } from './breakpoints';
const COLUMNS = 24;

interface ColProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  noPadding?: boolean;
}

type Justify = 'space-between' | 'space-around' | 'center' | 'space-evenly';

export const Row = styled.div<{ justify?: Justify; }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${({ justify }) => justify && `justify-content: ${justify}`}
`;

export const Col = styled.div<ColProps>`
  ${({ noPadding }) => !noPadding && 'padding: 10px'};
  flex-basis:  ${({ xs }) => 100 / (COLUMNS / xs)}%;
  @media ${device.sm} {
    flex-basis: ${({ sm }) => 100 / (COLUMNS / sm)}%;
  };
  @media ${device.md} {
    flex-basis: ${({ md }) => 100 / (COLUMNS / md)}%;
  };
  @media ${device.lg} {
    flex-basis: ${({ lg }) => 100 / (COLUMNS / lg)}%;
  };
  @media ${device.xl} {
    flex-basis: ${({ xl }) => 100 / (COLUMNS / xl)}%;
  };
`;
