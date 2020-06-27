import React from 'react';

const StudentNameInput = ({ exampleField, onChange }) => {

  return (
    <React.Fragment>
      <label className="d-block pt-1 pb-1" htmlFor="fullName">Type in full name:</label>
      <input
        className="d-block p-1"
        id="fullName"
        type="text"
        value={exampleField}
        onChange={onChange}
      />
    </React.Fragment>
  );
};


export default StudentNameInput;
