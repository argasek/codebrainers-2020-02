import React from 'react';

const Rooms = ({ onRoomCreate }) => {
  return (
    <React.Fragment>
      <p onClick={onRoomCreate}>Klik</p>
    </React.Fragment>
  );
};


export default Rooms;