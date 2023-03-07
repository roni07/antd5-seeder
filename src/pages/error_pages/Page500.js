import React from 'react';
import ErrorLayout from '../../components/layout/error_layout/ErrorLayout';
import {DASHBOARD_PATH} from "../../routes/Slug";

const Page500 = () => {
    return (
        <ErrorLayout
            status={500}
            title={500}
            subTitle="Sorry, something went wrong. Please try again later."
            btnName="Go To Dashboard"
            pathName={DASHBOARD_PATH}
        />
    );
}

export default Page500;
