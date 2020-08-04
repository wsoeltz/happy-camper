import React from 'react';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

const Root = styled.div`
  position: absolute;
  width: 400px;
  max-width: 100%;
  height: 800px;
  max-height: 70vh;
  box-sizing: border-box;
  padding: 1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
  background-color: #fff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: auto;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.34);

  @media (max-width: 700px) {
    margin-bottom: 0;
  }
`;

const CloseButton = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.3rem 0.7rem;
  font-size: 1.35rem;
  color: #555;
  text-decoration: none;
`;

// StandardPanel component that overlays the map and can be closed
// for a more complete view of the map
const StandardPanel = ({children}) => {
  return (
    <Root>
      <CloseButton to={'/'}>×</CloseButton>
      {children}
    </Root>
  );
}

export default StandardPanel;
