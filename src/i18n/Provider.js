import React, {Fragment} from 'react';
import {IntlProvider} from "react-intl";
import messages from "./messages";
import {Locales} from "./Locales";

const Provider = ({children, locale = Locales.english}) => {
    return (
        <IntlProvider
            locale={locale}
            textComponent={Fragment}
            messages={messages[locale]}
        >
            {children}
        </IntlProvider>
    );
};

export default Provider;
