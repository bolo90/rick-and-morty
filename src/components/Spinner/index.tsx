import styled, { keyframes } from "styled-components";
import { SpinnerColor } from '../../models/types.model';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;



const Spinner = styled.div<{ color: SpinnerColor}>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 6px solid ${({ color }) => color === 'light' ? 'white' : 'gray'};
  border-right: 6px solid ${({ color }) => color === 'light' ? 'white' : 'gray'};
  border-bottom: 6px solid ${({ color }) => color === 'light' ? 'white' : 'gray'};
  border-left: 6px solid ${({ color }) => color === 'light' ? 'transparent' : 'black'};;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
`;

export default Spinner;