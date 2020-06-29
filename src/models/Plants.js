import Category from './Category';

class Plant {
  constructor(name) {
    this.name = name;
    this.description = '';
    this.user = '';
    this.category = new Category();
    this.wateringInterval = '';
    this.fertilizingInterval = '';
    this.requiredExposure = '';
    this.requiredHumidity = '';
    this.requiredTemperature = '';
    this.blooming = undefined;
    this.difficulty = '';
  }
}

export default Plant;