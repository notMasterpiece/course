import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({onClick}) => {
    return (
        <div className='more-btn-wrap'>
            <button
                className='more-btn'
                onClick={onClick}
            >Show more</button>
        </div>
    );
};

MoreButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default MoreButton;