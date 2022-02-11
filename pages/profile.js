import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/forms/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    const followerList = [{ nickname: 'dhboys' }, { nickname: 'vaiv' }, { nickname: 'vaivOfficial' }];
    const followingList = [{ nickname: 'chelseaFC' }, { nickname: 'MCFC' }, { nickname: 'LiverpoolFC' }];

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
        )
};

export default Profile;