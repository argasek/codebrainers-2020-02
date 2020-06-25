import React from 'react';

const StudentButton = ({ label, onClick }) => {
  return (
    <div className="p-1">
      <button className="button" onClick={onClick}>{label}</button>
    </div>
  );
};


export default StudentButton;
