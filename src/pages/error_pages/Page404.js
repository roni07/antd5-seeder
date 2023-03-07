import React from 'react';
import ErrorLayout from '../../components/layout/error_layout/ErrorLayout';
import {DASHBOARD_PATH} from "../../routes/Slug";

const Page404 = () => {
    return (
        <ErrorLayout
            status={404}
            title={404}
            subTitle="Sorry, the page you visited does not exist."
            btnName="Go To Dashboard"
            pathName={DASHBOARD_PATH}
        />
    );
}

export default Page404;
