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
    // {
    //     key: 'users',
    //     title: 'Users',
    //     icon: <UserAddOutlined/>,
    //     subMenu: [
    //         {
    //             key: 'users-setup',
    //             title: 'Users',
    //             path: PATH.USER_LIST_VIEW_PATH,
    //             icon: <UserAddOutlined/>,
    //             subMenu: null,
    //             permissions: []
    //         },
    //     ],
    //     permissions: []
    // },
]

export default Navs;
