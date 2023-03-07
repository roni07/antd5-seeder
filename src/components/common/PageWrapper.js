import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({pageHeader, children}) => {
    return (
        <Fragment>
            <div className="page-header">
                {pageHeader}
            </div>
            <div className="page-content">
                {children}
            </div>
        </Fragment>
    );
}


PageWrapper.propTypes = {
    children: PropTypes.element.isRequired
}

export default PageWrapper;
