import React from 'react';
import { CloseMenuIcon, SidebarContainer, Icon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarMenu.styled';

interface SidebarMenuProps {
  show: boolean;
  setShow: () => void;
}

const Sidebar = ({ show, setShow }: SidebarMenuProps) => {

  return (
    <SidebarContainer show={show}>
      <Icon onClick={setShow}><CloseMenuIcon /></Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/characters" onClick={setShow}>Characters</SidebarLink>
          <SidebarLink to="/episodes" onClick={setShow}>Episodes</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
