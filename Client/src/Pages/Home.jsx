import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  return (
    <BgHome>
      <Sidebar />
    </BgHome>
  );
};

export default Home;

const BgHome = styled.div`
  background-color: #023430;
  width: 100%;
  height: 100vh;
`;
