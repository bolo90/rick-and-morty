import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../theme/breakpoints';

export const StyledButton = styled.div`
height: 100%;
  opacity: 1;
  transition: opacity 0.2s linear;
  text-align: center;
  font-weight: 700;
  position: relative;
  border-radius: 6px;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  ${({ theme }) => `
    border: 2px solid ${theme.text};
    color: ${theme.text};
  `}
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLinkButton = styled(Link)`
  border-radius: 50px;
  background: ${({ theme }) => theme.variables.neonGreen};
  white-space: nowrap;
  padding: 10px 20px;
  color: ${({ theme }) => theme.text};
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    
  }
`;