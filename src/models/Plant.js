// import Category from './Category';
import { v1 as uuid } from 'uuid';

class Plant {
  constructor(name) {
    this.id = uuid();
    this.name = name;
    // this.description = '';
    // this.user = '';
    // this.category = new Category();
    // this.wateringInterval = '';
    // this.fertilizingInterval = '';
    // this.requiredExposure = '';
    // this.requiredHumidity = '';
    // this.requiredTemperature = '';
    // this.blooming = undefined;
    // this.difficulty = '';
  }
}

export default Plant;