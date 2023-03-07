import React, {useContext} from 'react';
import {Button, Form, Input} from 'antd';
import {Navigate} from 'react-router-dom';
import {AuthContext} from "../../contexts/AuthContextProvider";
import {ROOT_PATH} from "../../routes/Slug";

/* SCSS */
import './login.scss';

const Login = () => {

    const authContext = useContext(AuthContext);

    const onFinish = values => {
        authContext.login(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    if (authContext.isLogin) return <Navigate to={ROOT_PATH}/>

    return (
        <div className="login-wrapper">
            <div className="login-content">
                <div className="login-banner">
                    <div className="info">
                        <h1>RMS</h1>
                    </div>
                </div>
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="login-form"
                >
                    <h4 className="login-title">Login</h4>

                    <Form.Item
                        label="Email"
                        name="username"
                        rules={[
                            {required: true, message: 'Please input your email!'},
                            {type: "email", message: 'Please input a valid email!'},
                        ]}
                    >
                        <Input type="email"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="login-form-button"
                            type="primary"
                            htmlType="submit"
                            loading={authContext.loading}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
