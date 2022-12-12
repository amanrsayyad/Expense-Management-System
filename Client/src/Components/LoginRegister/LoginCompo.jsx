import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios";
import { message } from 'antd';
import {
  RegisterContainer,
  RegisterGrid,
  RegisterCard,
  RegisterTitle,
  LoginData,
  InputContainer,
  Titlepage,
} from './Styles';
import Bg1 from '../../Assets/Bg1.jpg';

const LoginCompo = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // Form Submit
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const submitHandler = async () => {
    // console.log(login);
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', login);
      localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }))
      message.success('Login Successfull');
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false)
      message.error('Invalid Username Or Password');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [navigate]);
  return (
    <RegisterContainer>
      {loading && <h1>Loading....</h1>}
      <RegisterGrid>
        <RegisterCard>
          <RegisterTitle>
            <h2>Login</h2>
            <Link to='/Register'>Sign up</Link>
          </RegisterTitle>
          <LoginData>
            <InputContainer>
              <input type='email' placeholder='Email' value={login.email}
                onChange={(event) => setLogin({ ...login, email: event.target.value })} />
              <input type='password' placeholder='Password' value={login.password}
                onChange={(event) => setLogin({ ...login, password: event.target.value })} />
              <Link to='/' onClick={submitHandler}>Sign In</Link>
            </InputContainer>
            <Titlepage>
              <p>Join Us Now</p>
              <h2>
                Create an <br /> account with us
                <br />
                to learn more <br />
                about us
              </h2>
              <p>
                Don't have an account use the{' '}
                <Link to='/Register'>Register Form</Link>
              </p>
            </Titlepage>
          </LoginData>
        </RegisterCard>
        <RegisterCard>
          <img
            src={Bg1}
            alt=''
          />
        </RegisterCard>
      </RegisterGrid>
    </RegisterContainer>
  );
};

export default LoginCompo;
