import React from 'react';
import PropTypes from 'prop-types';

const Plantsinput = ({PlantNameValue, onChange}) => {
  return (
    <React.Fragment>
    <input
    className=""
    id="CategoryName"
    value={PlantNameValue}
    onChange={onChange}

    />

      </React.Fragment>
  );
};

export default Plantsinput;