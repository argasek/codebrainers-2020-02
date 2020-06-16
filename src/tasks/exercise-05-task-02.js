// Task 2. Create Plant object to reflect data from the API and other API classes from Django.
// If field in the API is named using snake_case, convert it to camelCase.

class Plant {
  static id = 0;

  constructor(name, category) {
    Plant.id++
    this.id = Plant.id;
    this.name = name;
    this.description = '';
    this.category = category;
    this.watering_interval = 0;
    this.fertilizing_interval = 0;
    this.required_exposure = '';
    this.required_humidity = '';
    this.required_temperature = '';
    this.blooming = false;
    this.difficulty = '';
    this.user = '';
    this.url = '';
  }
}
