// Task 2. Create Plant object to reflect data from the API and other API classes from Django.
// If field in the API is named using snake_case, convert it to camelCase.

class User {
  constructor(user) {
    this.user = user
  };
}

class Plant {
  constructor(user, name, description, category, wateringInterval, fertilizingInterval, requiredExposure, requiredHumidity, requiredTemperature, blooming, difficulty) {
    this.user = new User(user);
    this.name = name;
    this.description = description;
    this.category = category;
    this.wateringInterval = wateringInterval;
    this.fertilizingInterval = fertilizingInterval;
    this.requiredExposure = requiredExposure;
    this.requiredHumidity = requiredHumidity;
    this.requiredTemperature = requiredTemperature;
    this.blooming = blooming;
    this.difficulty = difficulty;
  };
}

class Room {
  constructor(user, name, description, exposure, humidity, temperature, drafty) {
    this.user = new User(user);
    this.name = name;
    this.description = description;
    this.exposure = exposure;
    this.humidity = humidity;
    this.temperature = temperature;
    this.drafty = drafty
  };
}

class UserPlant {
  constructor(user, name, description, room, plant, lastFertilized, lastWatered) {
    this.user = new User(user);
    this.name = name;
    this.room = room;
    this.plant = plant;
    this.lastFertilized = lastFertilized;
    this.lastWatered = lastWatered;
  };
}
