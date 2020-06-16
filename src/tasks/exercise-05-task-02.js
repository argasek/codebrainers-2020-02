// Task 2. Create Plant object to reflect data from the API and other API classes from Django.
// If field in the API is named using snake_case, convert it to camelCase.


// class User {
//   constructor() {
//     this.plants = [];
//   }
// }


class Category {
    constructor(name) {
        this.name = name;
        this.description = '';
        this.image_url = '';
        this.user = '';
    }
}


class Plant {
    constructor(name, wateringInterval, fertilizingInterval, requiredExposure, requiredHumidity,
                requiredTemperature, difficulty) {
        this.name = name;
        this.description = '';
        this.user = '';
        this.category = [];
        this.wateringInterval = wateringInterval;
        this.fertilizingInterval = fertilizingInterval;
        this.requiredExposure = requiredExposure;
        this.requiredHumidity = requiredHumidity;
        this.requiredTemperature = requiredTemperature;
        this.blooming = undefined;
        this.difficulty = difficulty;
    }
}


class Room {
    constructor(name, exposure, humidity, temperature) {
        this.name = name;
        this.description = '';
        this.user = '';
        this.exposure = exposure;
        this.humidity = humidity;
        this.temperature = temperature;
        this.drafty = undefined;
    }
}


class UserPlant {
    constructor(name) {
        this.name = name;
        this.description = '';
        this.image_url = '';
        this.user = '';
        this.room = [];
        this.plant = [];
        this.lastWatered = undefined;
        this.lastFertilized = undefined;
    }
}
