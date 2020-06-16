// Task 2. Create Plant object to reflect data from the API and other API classes from Django.
// If field in the API is named using snake_case, convert it to camelCase.


class UserMixin {
  constructor(user) {
    this.user = user;
  }
}


class ImageMixin {
  constructor(image_prop) {
    this.image_prop=image_prop;

  }

}
class NameDescriptionMixin {
  constructor(name, description) {
  this.name=name;
  this.description = "";


}
const exposure_choices = [
      ("dark", "Dark"),
      ("shade", "Shade"),
      ("partsun", "Part sun"),
      ("fullsun", "Full sun"),
      ];
const humidity_choices = [
        ("low", "Low"),
        ("medium", "Medium"),
        ("high", "High"),
     ];

const temperature_choices = [
        "cold",
        "medium",
        "warm"
     ]
const difficulty_choices = [
    {1: "Low"},
    {2: "Medium-low"},
    {3: "Medium"},
    {4: "Medium-high"},
    {5: "High"}
     ]

class datePlanting {
constructor (date) {
this.date = date;
    }
    function getDate(date){
  let d = new Date(date);
  return d;
    }
    }
    class Category {
  constructor() {
    this.ImageMixin = new ImageMixin();
    this.nameDescription = new NameDescriptionMixin();
    this.UserMixin = new UserMixin();
  }
}



class Plant {

  constructor(watering_interval, fertilizing_interval)
{
  this.category=new Category();
  this.namedescription = new NameDescriptionMixin();
  this.UserMixin=new UserMixin();
  this.watering_interval=watering_interval;
  this.fertilizing_interval=fertilizing_interval;
  this.exposure_choices = exposure_choices;
  this.humidity_choices = humidity_choices;
  this.required_temperature= temperature_choices;
  this.blooming = false;
  this.difficulty= difficulty_choices;

}
  }








  class Room {

  constructor (drafty){
    this.namedescription = new NameDescriptionMixin();
    this.UserMixin=new UserMixin();
    this.exposure_choices = exposure_choices;
    this.humidity_choices = humidity_choices;
    this.temperature_choices=temperature_choices;
    this.drafty = false;

  }
  }


  class UserPlant{

constructor () {

  this.image = new ImageMixin();
  this.name=new NameDescriptionMixin();
  this.user = new UserMixin();
  this.room = new Room();


    this.plant = new Plant();

    this.last_watered = new datePlanting();

    this.last_fertilized = new datePlanting();
}}








