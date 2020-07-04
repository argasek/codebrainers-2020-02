class Plant{
  constructor() {
    this.name = '';
    this.id = undefined;
    this.categorySlug = '';
    this.difficulty = undefined;
    this.room = undefined;
    this.url = '';
    this.lastWatered = '';
  }
  fromPlain(item) {
    this.name = item.name;
    this.id = item.id;
    this.categorySlug = item.category_slug;
    this.difficulty = item.difficulty;
    this.room = item.room;
    this.url = item.url;
    this.lastWatered = item.last_watered;
  }
}

export default Plant;



// category_slug: "green-plants"
// difficulty: 4
// id: 10
// name: "Licuala grandis"
// room: 1
// url: "http://gentle-tor-07382.herokuapp.com/plants/10/"