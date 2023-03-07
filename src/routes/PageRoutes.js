import {lazy} from 'react';
import * as PATH from "./Slug";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

// user
const UserListView = lazy(() => import("../pages/user/UserListView"));

const PageRoutes = [
    {
        path: PATH.DASHBOARD_PATH,
        component: Dashboard,
        permissions: []
    },
    {
        path: PATH.USER_LIST_VIEW_PATH,
        component: UserListView,
        permissions: []
    },
]

export default PageRoutes;
