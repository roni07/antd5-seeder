import React from 'react';
import {Button, Result} from "antd";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ErrorLayout = ({status, title, subTitle, btnName, pathName}) => {
    return (
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={<Link to={pathName}><Button type="primary">{btnName}</Button></Link>}
        />
    );
};

ErrorLayout.prototypes = {
    status: PropTypes.number.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default ErrorLayout;