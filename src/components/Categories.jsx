import React from 'react';

const Categories = ({ onCategorieCreate }) => {
  return (
    <React.Fragment>
      <p onClick={onCategorieCreate}>Klik</p>
    </React.Fragment>
  );
};

export default Categories;