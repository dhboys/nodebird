import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input } from 'antd';

const AppLayout = ({children}) => {
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
                <Input.Search enterButton style={{verticalAlign:'middle'}}/>
            </Menu.Item>  
            <Menu.Item>
                <Link href="/signup"><a>Sign Up</a></Link>
            </Menu.Item>
          </Menu>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout;