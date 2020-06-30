import React from 'react';
import PropTypes from 'prop-types';

const Roomsinput = ({RoomNameValue, onChange}) => {
  return (
    <React.Fragment>
    <input
    className=""
    id="CategoryName"
    value={RoomNameValue}
    onChange={onChange}

    />

      </React.Fragment>
  );
};

export default Roomsinput;