import { v1 as uuid } from 'uuid';

class Room{
  constructor(name) {
    this.id = uuid();
    this.name = name;

  }


  copy() {
    const roomCopy = new Room();
    roomCopy.id = this.id;
    roomCopy.name = this.name;

    return roomCopy;
  }
}

export default Room;