import React, { useCallback } from 'react';
import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, [])

    return (
        <Card
            actions={[
                <div key='twit'>트윗<br />0</div>,
                <div key='followings'>팔로잉<br />0</div>,
                <div key='followers'>팔로워<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>DH</Avatar>}
                title="dhboys"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
}

export default UserProfile;