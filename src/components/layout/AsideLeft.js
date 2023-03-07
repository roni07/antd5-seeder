import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {DingdingOutlined} from "@ant-design/icons";
import Brand from './brand/Brand';
import Navs from "../../configs/Navs";
import {ThemeContext} from "../../contexts/ThemeContextProvider";
import {DASHBOARD_PATH} from "../../routes/Slug";

import "./aside_left.scss";

const AsideLeft = ({collapsed, onCollapse}) => {

    const globalContext = useContext(ThemeContext);

    const headerLogoClassName = collapsed ? 'brand collapsed' : 'brand';

    // const {permissions} = useContext(AuthContext);

    /* Menu Binding Start */

    /*const bindSingleMenuItem = (item) => {
        return (
            <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={globalContext.screenWidth > 991 ? null : () => onCollapse(true)}
            >
                <span>{item.title}</span>
                {item.path && <Link to={item.path}/>}
            </Menu.Item>
        )
    }*/

    const bindSingleMenuItem = (item) => {
        return (
            {
                key: item.key,
                label: <div onClick={globalContext.screenWidth > 991 ? null : () => onCollapse(true)}>
                    {item.title}
                    {item.path && <Link to={item.path}/>}
                </div>,
                icon: item.icon,
            }
        )
    }

    /*const bindSubMenuItem = (item) => {
        return (
            <SubMenu
                key={item.key}
                title={
                    <span>
                        {item.icon}
                        <span>{item.title}</span>
                    </span>
                }
            >
                {item.subMenu.map(item => getMenuItems(item))}
            </SubMenu>
        )
    }*/

    const bindSubMenuItem = item => {
        return (
            {
                key: item.key,
                label: <div>{item.title}</div>,
                icon: item.icon,
                children: item.subMenu.map(childItem => getMenuItems(childItem))
            }
        )
    }

    const getMenuItems = (item) => {
        // if (!hasPermission(permissions, item.permissions)) {
        //     return null;
        // }

        return item.subMenu ? bindSubMenuItem(item) : bindSingleMenuItem(item);
    }

    /* Menu Binding End */

    return (
        <>
            <Link to={DASHBOARD_PATH}>
                <Brand
                    brandText="RMS"
                    icon={<DingdingOutlined style={{color: "#AB323C"}}/>}
                    className={headerLogoClassName}
                />
            </Link>
            <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                mode="inline"
                className="aside-left-content"
                items={Navs.map(item => getMenuItems(item))}
            />
            {/*<Menu*/}
            {/*    theme="light"*/}
            {/*    defaultSelectedKeys={['1']}*/}
            {/*    mode="inline"*/}
            {/*    className="aside-left-content"*/}
            {/*>*/}
            {/*    {Navs.map(item => getMenuItems(item))}*/}
            {/*</Menu>*/}
        </>
    );
}

export default AsideLeft;
