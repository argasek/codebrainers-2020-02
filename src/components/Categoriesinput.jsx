import React from 'react';
import PropTypes from 'prop-types';

const Categoriesinput = ({CategoryNameValue, onChange}) => {
  return (
    <React.Fragment>
    <input
    className=""
    id="CategoryName"
    value={CategoryNameValue}
    onChange={onChange}

    />

      </React.Fragment>
  );
};

export default Categoriesinput;