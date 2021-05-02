import styled from 'styled-components';
import { device } from '../theme/breakpoints';

export const Container = styled.div`
  margin: 0 auto;
  @media ${device.sm} {
    max-width: 540px;
  }
  @media ${device.md} {
    max-width: 720px;
  }
  @media ${device.lg} {
    max-width: 960px;
  }
  @media ${device.xl} {
    max-width: 1140px;
  }
`;
export const ContainerFluid = styled.div`
  margin: 0;
  max-width: 100%;
`;

export const Input = styled.input`
    position: relative;
    overflow: hidden;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 17px;
    color: #333;
    cursor: default;
    outline: none;
    padding: 8px 52px 8px 10px;
    width: 100%;
    transition: all 200ms ease;
`;