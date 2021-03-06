import React, { useCallback, useMemo, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import useinput from '../hooks/useinput';

const Signup = () => {

    const passwordErrorStyle = useMemo(() => ({ color: 'red'}),[]);
    const termErrorStyle = useMemo(() => ({ marginTop: 10 }),[]);

    const [id, onChangeId] = useinput('');
    const [password, onChangePassword] = useinput('');
    const [nickname, onChangeNickname] = useinput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState();
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true);
        }

        console.log(id, nickname, password);

    }, [password, passwordCheck, term]);
    return (
        <AppLayout>
            <Head>
                <meta charSet='utf-8' />
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input 
                    name="user-id" 
                    value={id} 
                    onChange={onChangeId} 
                    required 
                />
            </div>
            <div>
                <label htmlFor='user-nickname'>닉네임</label>
                <br />
                <Input 
                    name="user-nickname" 
                    value={nickname} 
                    onChange={onChangeNickname} 
                    required 
                />
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                    <br />
                    <Input 
                        name="user-password" 
                        type="password" 
                        value={password} 
                        onChange={onChangePassword} 
                        required 
                    />
                </div>
                <div>
                <label htmlFor='user-password-check'>비밀번호 확인</label>
                    <br />
                    <Input 
                        name="user-password-check" 
                        type="password" 
                        value={passwordCheck} 
                        onChange={onChangePasswordCheck} 
                        required 
                    />
                    {passwordError && <div style={passwordErrorStyle}>비밀번호가 일치하지 않습니다.</div>}
                    <div>
                        <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>약관의 동의합니다.</Checkbox>
                        {termError && <div style={passwordErrorStyle}>약관에 동의하셔야 합니다.</div>}
                    </div>
                </div>
                <div style={termErrorStyle}>
                    <Button type='primary' htmlType='submit'>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;