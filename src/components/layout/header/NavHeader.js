import React, {useContext, useEffect} from 'react';
import {Avatar, Divider, Dropdown, Layout} from 'antd';
import {Link} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';
import {AuthContext} from '../../../contexts/AuthContextProvider';
import {ThemeContext} from "../../../contexts/ThemeContextProvider";

/* SCSS */
import './nav_header.scss'

const {Header} = Layout;

const NavHeader = () => {

    const authContext = useContext(AuthContext);
    const {locale, changeLocale} = useContext(ThemeContext);

    console.log("k-----k", locale)

    useEffect(() => {

        /*if (authContext.isLogin) {
            authContext.getUserProfile(authContext.profile.id);
        }*/

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = () => {
        authContext.logout();
    }

    const menuItems = [
        {
            key: 'profile',
            label: (
                <>
                    Profile
                    <Link to={"#"}/>
                </>
            ),
            children: null,
            icon: null
        },
        {
            key: 'divider1',
            label: (<Divider className="my-menu-divider" style={{margin: 0}}/>),
            children: null,
            icon: null
        },
        {
            key: 'logout',
            label: (
                <div onClick={logout}>
                    Logout
                </div>
            ),
            children: null,
            icon: null
        },
    ]

    const localMenuItems = [
        {
            key: 'english',
            label: (
                <div onClick={() => changeLocale("english")}>
                    English
                </div>
            ),
            children: null,
            icon: null
        },
        {
            key: 'bengali',
            label: (
                <div onClick={() => changeLocale("bengali")}>
                    Bengali
                </div>
            ),
            children: null,
            icon: null
        },
        {
            key: 'urdu',
            label: (
                <div onClick={() => changeLocale("urdu")}>
                    Urdu
                </div>
            ),
            children: null,
            icon: null
        },
    ]

    return (
        <Header className="nav-header">
            <Dropdown className="drop-down" menu={{items: menuItems}} trigger={['click']}>
                <div>
                    {
                        !authContext.profileLoading && authContext.profile &&
                        <span style={{marginRight: "10px"}}>
                            {authContext.profile?.info?.fullName}
                        </span>
                    }
                    <Avatar icon={<UserOutlined/>}/>
                </div>
            </Dropdown>

            {/*<Dropdown*/}
            {/*    className="drop-down"*/}
            {/*    menu={{menuItems}}*/}
            {/*    trigger={['click']}*/}
            {/*>*/}
            {/*    <div>*/}
            {/*        {!authContext.profileLoading && authContext.profile &&*/}
            {/*            <span>{authContext.profile?.info?.fullName}</span>} &nbsp;*/}
            {/*        <Avatar icon={<UserOutlined/>}/>*/}
            {/*    </div>*/}
            {/*</Dropdown>*/}

            <Divider type="vertical"/>

            <Dropdown
                className="drop-down"
                menu={{items: localMenuItems}}
                trigger={['click']}
            >
                <div>{locale}</div>
            </Dropdown>
        </Header>
    );
}

export default NavHeader;
