import React, {lazy, Suspense, useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoadingSuspense from './components/common/LoadingSuspense';
import PrivateRoute from './components/common/PrivateRoute';
import {AuthContext} from './contexts/AuthContextProvider';
import {I18nProvider} from "./i18n";
import Interceptors from "./rest_handlers/Interceptors";
import {ThemeContext} from "./contexts/ThemeContextProvider";
import {LOGIN_PATH, PAGE_403_PATH, PAGE_404_PATH, PAGE_500_PATH} from "./routes/Slug";
import {ConfigProvider} from "antd";

const DefaultLayout = lazy(() => import("./components/layout/DefaultLayout"));
const Login = lazy(() => import("./pages/login/Login"));
const Page403 = lazy(() => import("./pages/error_pages/Page403"));
const Page404 = lazy(() => import("./pages/error_pages/Page404"));
const Page500 = lazy(() => import("./pages/error_pages/Page500"));

const App = () => {

    const {isLogin, loggedInAs} = useContext(AuthContext);
    const {setScreenWidth, locale} = useContext(ThemeContext);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateDimensions = () => {
        setScreenWidth(window.innerWidth);
    }

    return (
        <ConfigProvider
            direction={locale === "ur-pk" ? "rtl" : "ltr"}
            theme={{
                token: {
                    colorPrimary: "#AB323C",
                }
            }}
        >
            <I18nProvider locale={locale}>
                <div className="app-wrapper">
                    <Suspense fallback={<LoadingSuspense/>}>
                        <BrowserRouter>
                            <Routes>
                                <Route path={LOGIN_PATH} element={<Login/>}/>
                                <Route element={<PrivateRoute isLogin={isLogin} loggedInAs={loggedInAs}/>}>
                                    <Route path={PAGE_404_PATH} element={<Page404/>}/>
                                    <Route path={PAGE_403_PATH} element={<Page403/>}/>
                                    <Route path={PAGE_500_PATH} element={<Page500/>}/>
                                    <Route path="*" element={<DefaultLayout/>}/>
                                </Route>
                            </Routes>
                            <Interceptors/>
                        </BrowserRouter>
                    </Suspense>
                </div>
            </I18nProvider>
        </ConfigProvider>
    );

}

export default App;

