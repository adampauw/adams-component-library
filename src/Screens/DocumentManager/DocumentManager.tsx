import { useState } from 'react';
import styled from 'styled-components';

interface SideBarProps {
  isOpen: boolean;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 32px;
`;

const Item = styled.div`
  width: calc(25% - 16px);
  height: 100px;
  margin-bottom: 16px;
  background-color: lightgray;
  cursor: pointer;
`;

const SideBar = styled.div<SideBarProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  z-index: 1;
`;

const SideBarItem = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 16px;
  background-color: lightgray;
`;

function DocumentManager() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      {[...Array(12)].map((_, index) => (
        <Item key={index} onClick={handleItemClick} />
      ))}
      <SideBar isOpen={isOpen}>
        {[...Array(9)].map((_, index) => (
          <SideBarItem key={index} />
        ))}
        <button onClick={handleCloseClick}>Close</button>
      </SideBar>
    </Container>
  );
}

export default DocumentManager;
