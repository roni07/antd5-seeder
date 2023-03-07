import React, {createContext, useState} from 'react';
import {Toast} from "../components/common/Toast";
import {getErrorMessage} from "../helpers/Utils";
import {ACCESS_TOKEN, PROFILE, REFRESH_TOKEN} from "../helpers/Constant";
import AuthService from "../services/AuthService";

export const AuthContext = createContext("AuthContext");

const auth = localStorage.getItem(ACCESS_TOKEN);
const profileData = localStorage.getItem(PROFILE);

const AuthContextProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(!!auth);
    const [profile, setProfile] = useState(profileData ? JSON.parse(profileData) : null);
    const [loading, setLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(false);

    const login = async credential => {

        try {
            setLoading(true);
            const response = await AuthService.login(credential);

            localStorage.setItem(ACCESS_TOKEN, response.data.token.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.token.refresh);

            const _profile = {info: response.data.user, permissions: []};
            localStorage.setItem(PROFILE, JSON.stringify(_profile));
            setProfile(_profile);

            // setLoggedInAs(USER);

            setIsLogin(true);
            setLoading(false);
        } catch (error) {
            const message = getErrorMessage(error);
            Toast("error", "Error", message);
            setLoading(false);
            setIsLogin(false);
        }

    }

    const getUserProfile = async () => {

        try {
            setProfileLoading(true);
            // const response = await BrokerService.getUserProfile();
            // setProfile({...response.data});
            setProfileLoading(false);
        } catch (error) {
            const message = getErrorMessage(error);
            Toast("error", "Error", message);
            setProfileLoading(false);
        }
    }

    const logout = () => {
        setIsLogin(false);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                profile,
                loading,
                profileLoading,
                permissions: profile ? profile.permissions : [],
                login,
                logout,
                getUserProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
