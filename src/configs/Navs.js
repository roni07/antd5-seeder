import React from 'react';
import * as PATH from '../routes/Slug';
import * as ICON from '@ant-design/icons';

const Navs = [
    {
        key: 'dashboard',
        title: 'Dashboard',
        path: PATH.DASHBOARD_PATH,
        icon: <ICON.PieChartOutlined/>,
        subMenu: null,
        permissions: []
    },
    {
        key: "users-management",
        title: 'User Management',
        icon: <ICON.UserOutlined/>,
        subMenu: [
            {
                key: 'users',
                title: 'Users',
                path: PATH.USER_LIST_VIEW_PATH,
                icon: <ICON.UserOutlined/>,
                subMenu: null,
                permissions: []
            },
        ],
        permissions: []
    },
]

export default Navs;
