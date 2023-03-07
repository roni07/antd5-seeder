import React from 'react';
import {PageHeader} from "@ant-design/pro-layout";
import PageWrapper from "../../components/common/PageWrapper";

const UserListView = () => {

    const pageHeader = <PageHeader
        title="User List"
    />

    return (
        <PageWrapper pageHeader={pageHeader}>
            <div>
                Here will be user list view
            </div>
        </PageWrapper>
    );
};

export default UserListView;