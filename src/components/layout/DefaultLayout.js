import React, {lazy, Suspense, useContext, useEffect, useState} from 'react';
import {Layout} from 'antd';
import {Navigate, Route, Routes} from 'react-router-dom';
import NavHeader from './header/NavHeader'
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";
import {ThemeContext} from "../../contexts/ThemeContextProvider";
import LoadingSuspense from "../common/LoadingSuspense";
import PageRoutes from "../../routes/PageRoutes";
import {DASHBOARD_PATH, ROOT_PATH} from "../../routes/Slug";
import Page404 from "../../pages/error_pages/Page404";

const AsideLeft = lazy(() => import('./AsideLeft'));

const {Sider, Content} = Layout;

const DefaultLayout = () => {

    // const {permissions} = useContext(AuthContext);
    const globalContext = useContext(ThemeContext);

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {

        if (globalContext.screenWidth > 991) {
            setCollapsed(false);
        } else {
            setCollapsed(true)
        }

    }, [globalContext.screenWidth])


    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    return (
        <Layout>
            <Sider
                width={250}
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
                collapsedWidth={0}
                zeroWidthTriggerStyle={{
                    top: "82px",
                    backgroundColor: "#AB323C",
                    color: "#ffffff"
                }}
                trigger={collapsed ? <CaretRightOutlined/> : <CaretLeftOutlined/>}
                theme="light"
                className="my-sider"
            >
                <Suspense fallback={<LoadingSuspense height="100vh"/>}>
                    <AsideLeft collapsed={collapsed} onCollapse={onCollapse}/>
                </Suspense>
            </Sider>
            <Layout>
                <NavHeader/>
                <Content className="app-page">
                    <Suspense fallback={<LoadingSuspense/>}>
                        <Routes>
                            {
                                PageRoutes.map(route => {

                                    // if (!hasPermission(permissions, route.permissions)) {
                                    //     return null;
                                    // }

                                    return <Route
                                        key={route.path}
                                        path={route.path}
                                        element={<route.component/>}
                                    />
                                })
                            }
                            <Route path={ROOT_PATH} element={<Navigate to={DASHBOARD_PATH}/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
