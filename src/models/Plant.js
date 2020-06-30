import { v1 as uuid } from 'uuid';
import Room from "../components/Rooms";

class Plant {
  constructor(name) {
    this.id = uuid();
    this.name = name;

  }


  copy() {
    const plantCopy = new Plant();
    plantCopy.id = this.id;
    plantCopy.name = this.name;

    return plantCopy;
  }
}

// copy(classname,poles){
//   const objectCopy=new classname;
//   poles.map (() => classname.poles[index]=this.poles[index];)
//
// }

export default Plant;