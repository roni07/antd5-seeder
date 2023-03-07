import React from 'react';
import { PageHeader } from "@ant-design/pro-layout";
import PageWrapper from "../../components/common/PageWrapper";

const Dashboard = () => {

    const pageHeader = <PageHeader title="Dashboard"/>;

    return (
        <PageWrapper pageHeader={pageHeader}>
            <div>
                This is our dashboard
            </div>
        </PageWrapper>
    );
};

export default Dashboard;