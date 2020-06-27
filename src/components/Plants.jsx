import React from 'react';

const Plants = ({ onPlantCreate }) => {
  return (
    <React.Fragment>
      <p onClick={onPlantCreate}>Klik</p>
    </React.Fragment>
  );
};


export default Plants;
