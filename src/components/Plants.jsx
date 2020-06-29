import React from 'react';

const Plants = ({plants}) => {

  return (
    <div>
      <h1>Plants</h1>
      <div>
        {plants.map((item) => <div>{item}</div>)}
        <input type="text"/>
      </div>
    </div>
    // <React.Fragment>
    //   <h2>Plants</h2>
    //   <Plant name='Plant1'/>
    //   <p onClick={onPlantCreate}>Klik</p>
    // </React.Fragment>
  );
};


export default Plants;
