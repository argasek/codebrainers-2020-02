import React from 'react';

const StudentListSortButton = ({ onClick }) => {
  return (
    <div className="p-1">
      <button className="button" onClick={onClick}>Sort students</button>
    </div>
  );
};


export default StudentListSortButton;
