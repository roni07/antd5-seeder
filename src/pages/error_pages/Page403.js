import React from 'react';
import ErrorLayout from '../../components/layout/error_layout/ErrorLayout';
import {DASHBOARD_PATH} from "../../routes/Slug";

const Page403 = () => {
    return (
        <ErrorLayout
            status={403}
            title={403}
            subTitle="Sorry, you are not authorized to access this page."
            btnName="Go To Dashboard"
            pathName={DASHBOARD_PATH}
        />
    );
}

export default Page403;
