import React from 'react';
import PropTypes from 'prop-types';

const StudentListSortButton = ({}) => {
  return (
    <div className="p-1">
      <button className="button" onClick={function () { alert('Hey!') }}>Sort students</button>
    </div>
  );
};


export default StudentListSortButton;
