import React from 'react';
import styled from 'styled-components';
import RegisterCompo from '../Components/LoginRegister/RegisterCompo';

const Register = () => {
  return (
    <RegisterMain>
      <RegisterLayout>
        <RegisterLayoutDiv></RegisterLayoutDiv>
        <RegisterLayoutDiv></RegisterLayoutDiv>
        <RegisterCompo />
      </RegisterLayout>
    </RegisterMain>
  );
};

export default Register;

const RegisterMain = styled.div`
  position: relative;
`;

const RegisterLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const RegisterLayoutDiv = styled.div`
  width: 100%;
  height: 100vh;

  &:nth-child(1) {
    background-color: #00ed64;
  }
  &:nth-child(2) {
    background-color: #023430;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
    height: 60vh;

    &:nth-child(1) {
      background-color: #00ed64;
    }
    &:nth-child(2) {
      background-color: #00ed64;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 50vh;

    &:nth-child(1) {
      background-color: #00ed64;
    }
    &:nth-child(2) {
      background-color: #00ed64;
    }
  }
`;
