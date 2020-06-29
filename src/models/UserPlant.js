import Room from './Room';
import Plant from './Plant';

class UserPlant {
    constructor(name) {
        this.name = name;
        this.description = '';
        this.image_url = '';
        this.user = '';
        this.room = new Room();
        this.plant = new Plant();
        this.lastWatered = undefined;
        this.lastFertilized = undefined;
    }
}