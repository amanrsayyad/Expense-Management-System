import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [loginUser, setLoginUser] = useState('')
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user)
    }
  }, [])

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('user');
    message.success('Logout Successfull');
    navigate('/Login');
  }

  return (
    <SidebarContainer>
      <SidebarMain>
        <SidebarCard style={{ width: isOpen ? '250px' : '70px' }}>
          <TopSection
            style={{ marginLeft: isOpen ? '0px' : '0px' }}
            className='bars'
          >
            <FaBars onClick={toggle} />
          </TopSection>
          <Username>
            <h3>R</h3>
            <h2 style={{ display: isOpen ? 'block' : 'none' }}>{loginUser && loginUser.username}</h2>
          </Username>
          <Border style={{ width: isOpen ? '90%' : '45px' }}></Border>
          <SidebarUl>
            <SidebarLink>
              <div className='icon'>
                <FaTh />
              </div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='link_text'
              >
                Dashboard
              </div>
            </SidebarLink>
            <div className='icon'>
              <FaTh />
            </div>
            <button
              style={{ display: isOpen ? 'block' : 'none' }}
              className='link_text'
              onClick={logoutHandler}
            >
              Logout
              </button>
          </SidebarUl>
        </SidebarCard>
      </SidebarMain>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  position: relative;
`;

const SidebarMain = styled.div`
  width: 100%;
  padding: 10px 10px;
`;

const SidebarCard = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #fff;
  height: 97vh;
  width: 250px;
  transition: all 0.5s;
`;

const TopSection = styled.div`
  padding: 15px 20px;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px 10px;
  margin-top: 10px;

  h3 {
    background-color: lightblue;
    padding: 8px 15px;
    margin-right: 15px;
    border-radius: 50%;
  }
  h2 {
    font-weight: 400;
    color: #fff;
    font-size: 25px;
  }
`;

const Border = styled.div`
  background-color: #fff;
  height: 0.5px;
  border-radius: 9px;
  width: 90%;
  margin: 0px 10px;
  margin-top: 10px;
`;

const SidebarUl = styled.ul`
  padding: 20px 5px;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  font-size: 20px;

  &:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }

  .icon,
  .link_text {
    font-size: 20px;
  }

  .active {
    background: lightskyblue;
    color: #000;
  }
`;
