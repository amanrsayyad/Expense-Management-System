import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from "axios";
import {
  RegisterContainer,
  RegisterGrid,
  RegisterCard,
  RegisterTitle,
  RegisterData,
  InputContainer,
  Titlepage,
} from './Styles';
import Bg1 from '../../Assets/Bg1.jpg';

const RegisterCompo = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // Form Submit
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  })
  const submitHandler = async () => {
    // console.log(register);
    try {
      setLoading(true);
      await axios.post('/users/register', register);
      message.success('Registration Successfull');
      setLoading(false);
      navigate('/Login');
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
            <h2>Create Account</h2>
            <Link to="/Login">Sign in</Link>
          </RegisterTitle>
          <RegisterData>
            <InputContainer>
              <input type='text' placeholder='Username' value={register.username}
                onChange={(event) =>
                  setRegister({ ...register, username: event.target.value })
                }
              />
              <input type='email' placeholder='Email'
                onChange={(event) =>
                  setRegister({ ...register, email: event.target.value })
                }
              />
              <input type='password' placeholder='Password' onChange={(event) =>
                setRegister({ ...register, password: event.target.value })
              } />
              <Link to='/' onClick={submitHandler}>Sign Up</Link>
              {/* <button type="submit">Sign Up</button> */}
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
                Do you have already have an account use the{' '}
                <Link to='/Login'>Login Form</Link>
              </p>
            </Titlepage>
          </RegisterData>
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

export default RegisterCompo;
