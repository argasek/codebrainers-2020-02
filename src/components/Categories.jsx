import React from 'react';
// import Plant from './Plant'

const Categories = ({categories}) => {

  return (
    <div>
      <h1>Categories</h1>
      <div>
        {categories.map((item) => <div>{item}</div>)}
        <input type="text"/>
      </div>
    </div>
  );
};

export default Categories;
