import React from 'react';
import 'App.scss';
import Chance from 'chance';
import Plants from 'components/Plants';
import Rooms from 'components/Rooms';
import Categories from 'components/Categories';
import Plantslist from 'models/Plantslist';
import Categorieslist from 'models/Categorieslist';
import Roomslist from 'models/Roomslist';
import Plant from 'models/Plant';
import Room from 'models/Room';
import Category from 'models/Category';
import Categoriesinput from "./components/Categoriesinput";
import Roomsinput from "./components/Roomsinput";
import Plantsinput from "./components/Plantsinput";



const chance = new Chance();

// const chance = require('chance');

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.onPlantCreate();
    // this.plantName = this.onPlantCreate();
    // this.initPlants(this.plantName);
    this.initCategories("kwiat młodzieży");
    this.initRooms("kwiat młodzieży");
    this.state = {
      plants: new Plantslist(),
      categories: new Categorieslist(),
      rooms: new Roomslist(),
      FullName:'',
      SampleName:'Type here please :)',


    };
  }


// onPlantCreate() {
//
//     return chance.name();
//   }
//
//
//   initPlants(plantName) {
//
//     this.plants = new Plantslist();
//     this.plants.push(new Plant(plantName));
//   }

  initCategories(inputValue) {
   this.categories = new Categorieslist();
   this.categories.push(new Category(inputValue));
  }

  initRooms(inputValue) {

   this.rooms = new Roomslist();
   this.rooms.push(new Room(inputValue));
  }

  // handleInputChange = (event) => {
  //   this.setState({fullName: event.currentTarget.value});
  // }
// this.initPlants('sialala')
// ...
// initPlants(zmienna) {
// ...

handleInputChange= (event) =>{  this.setState({FullName: event.currentTarget.value});
}


  // onCategorieCreate = () => { this.initPlants()}


  render() {
    const {
      plants,
      categories,
      rooms
    } = this.state;

    return (
      <div className="app">
        <Plants
          plants={plants}
          onPlantCreate={this.onPlantCreate}
        />
        <Rooms
          rooms={rooms}
          onPlantCreate={this.onRoomCreate}
        />

        <Categories
          categories={categories}
          onCategorieCreate={this.onCategorieCreate}
        />



        <h1>Categories</h1>
        <div>
          { plants.map((item) => <div>{item}</div>) }
          <input type="text" />
        </div>

        <h1>Rooms</h1>
        <div>
          { rooms.map((item) => <div>{item}</div>) }
          <input type="text" />
        </div>

         <h1>Plants</h1>
        <div>
          { plants.map((item) => <div>{item}</div>) }
          <input type="text" />
        </div>
        <div className="plants-input">
          <Categoriesinput
            sampleField = {this.state.FullName}
            onChange = {this.handleInputChange}/>
          <Plantsinput
            sampleField = {this.state.FullName}
            onChange = {this.handleInputChange}/>
          <Roomsinput
            sampleField = {this.state.FullName}
            onChange = {this.handleInputChange}/>

        </div>

      </div>
    );
  }

}

export default App;