import React, {createContext, useState} from 'react';
import {Locales} from "../i18n";
import {LANGUAGE} from "../helpers/Constant";

export const ThemeContext = createContext("ThemeContext");

const lang = localStorage.getItem(LANGUAGE);
const ThemeContextProvider = ({children}) => {

    const [screenWidth, setScreenWidth] = useState(0);
    const [locale, setLocale] = useState(lang ? lang : Locales.english);

    const changeLocale = locale => {
        setLocale(Locales[locale]);
        localStorage.setItem(LANGUAGE, Locales[locale]);
    }

    return (
        <ThemeContext.Provider
            value={{
                screenWidth,
                setScreenWidth,
                locale,
                changeLocale,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
