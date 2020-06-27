import React from 'react';

const StudentListRandomizeButton = ({ onClick }) => {
  return (
    <div className="pt-1">
      <button className="button" onClick={onClick}>Randomize students</button>
    </div>
  );
};


export default StudentListRandomizeButton;
