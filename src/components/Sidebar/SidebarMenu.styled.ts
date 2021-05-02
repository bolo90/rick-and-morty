import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside<{ show: boolean; }>`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: ${({ show }) => show ? 0 : '-100%'};
  opacity: ${({ show }) => show ? 1 : 0};
`;

export const CloseMenuIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.text};
`;

export const Icon = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;  
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  user-select: none;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  height: 40%;
  display: flex;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.variables.neonGreen};
  }
`;