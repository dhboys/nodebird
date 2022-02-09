import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from '../components/forms/LoginForm';


    
const AppLayout = ({children}) => {
    const SearchInputStyle = useMemo(() => ({verticalAlign: 'middle;'}),[]); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>  
          <Menu mode='horizontal'>
            <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/profile"><a>Profile</a></Link>
            </Menu.Item>   
            <Menu.Item>
                <Input.Search style={SearchInputStyle} enterButton />
            </Menu.Item>  
            <Menu.Item>
                <Link href="/signup"><a>Sign Up</a></Link>
            </Menu.Item>
          </Menu>
          <Row gutter={8}>
              <Col xs={24} md={6}>
                  {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
              </Col>
              <Col xs={24} md={12}>
                  {children}
              </Col>
              <Col xs={24} md={6}>
                  <a href='https://velog.io/@dhboys' target='_blank' rel='noreferrer noopener'>Made by dhboys</a>
              </Col>
          </Row>
            
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout;