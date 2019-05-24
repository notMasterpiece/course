import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({onChange}) => {
    return (
        <input
            className='filter'
            type="text"
            placeholder='Search by title ...'
            onChange={onChange}
        />
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;