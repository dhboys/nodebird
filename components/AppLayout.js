import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from '../components/forms/LoginForm';


    
const AppLayout = ({children}) => {
    const SearchInputStyle = useMemo(() => ({verticalAlign: 'middle;'}),[]); 
    // redux 에서 상태를 관리해주기 때문에 component 별로 state를 가질 필요가 없다.
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // store에서 상태 가져오기
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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
                  {isLoggedIn ? <UserProfile /> : <LoginForm />}
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