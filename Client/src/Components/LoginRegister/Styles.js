import styled from 'styled-components';

//---------------------[ REGISTER STYLING ]--------------------//
export const RegisterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 991px) {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
  }

  @media only screen and (max-width: 400px) {
    position: absolute;
    top: 23.5%;
    left: 50%;
    transform: translate(-50%, -20%);
  }
`;

export const RegisterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 480px;
  width: 1100px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: 600px;
    width: 350px;
  }
`;

export const RegisterCard = styled.div`
  &:nth-child(1) {
    background-color: #023430;
    padding: 50px 30px;
    border-radius: 30px 0px 0px 30px;

    @media only screen and (max-width: 991px) {
      border-radius: 30px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px 30px 30px 0px;

    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const RegisterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  h2 {
    font-weight: 400;
  }
  a {
    font-weight: 400;
    color: #fff;
    text-decoration: none;
  }
`;

export const RegisterData = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;

export const LoginData = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 6px;
    margin-bottom: 20px;
    font-size: 16px;

    &::placeholder {
      color: #023430;
      font-weight: 500;
      font-size: 15px;
    }
  }

  a {
    background-color: #00ed64;
    text-decoration: none;
    padding: 10px 20px;
    color: #023430;
    font-size: 18px;
    font-weight: 600;
    border-radius: 2px;
    margin-top: 15px;
  }

  a:hover {
    border-radius: 20px;
    transition: border-radius 0.15s;
  }
`;

export const Titlepage = styled.div`
  color: #fff;
  p {
    margin: 20px 0px;
    font-weight: 450;
  }
  a {
    color: yellow;
  }
  h2 {
    font-weight: 400;
  }
`;
