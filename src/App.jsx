import React from 'react';
import 'App.scss';
import Chance from 'chance';
import Plants from 'components/Plants';
import Categories from "./components/Categories";

const chance = new Chance();

// const chance = require('chance');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initPlants();
    this.initCategories();
    this.initRooms();
    this.initUserPlants();
    this.state = {
      plants: [],
      categories: [],
      rooms: [],
      userplants: [],
    };
  }

  initPlants() {
    const plants = [];
    this.plants = plants;
    this.plants.push(chance.name());
    this.plants.push(chance.name());
    this.plants.push(chance.name());
    this.plants.push(chance.name());
    this.plants.push(chance.name());
    this.plants.push(chance.name());
    console.log(plants);
  }


  initCategories() {
    const categories = [];
    this.categories = categories;
    this.categories.push('Cat1');
    this.categories.push('Cat2');
    this.categories.push('Cat3');
  }

  initRooms() {
    const rooms = [];
    this.rooms = rooms;
  }

  initUserPlants() {
    const userPlants = [];
    this.userPlants = userPlants;
  }

  // handleInputChange = (event) => {
  //   this.setState({fullName: event.currentTarget.value});
  // }

  // sortStudents = () => {
  //   const sortCriteria = [
  //     {key: "coffees", direction: "asc"},
  //     {key: "name", direction: "desc"},
  //   ];
  //   this.setState({
  //     sortedStudents: this.students.getSortedStudents(sortCriteria)
  //   });
  // }

  // shuffleStudents = () => {
  //   this.setState({
  //     shuffledStudents: this.students.getShuffledStudents()
  //   });
  // }
  //
  // onFullNameChange = (event) => {
  //   if (this.index === -1) {
  //     this.index = this.state.shuffledStudents.findIndex((student) => student.name === 'Tajemnicza studentka');
  //   }
  //   this.handleInputChange(event);
  //
  //   if (this.index !== -1) {
  //     this.fullName = event.currentTarget.value;
  //   }
  // }
  //
  // updateStudent = () => {
  //   const fullName = this.fullName.trim();
  //   if (fullName) {
  //     const shuffledStudents = this.students.copy(this.state.shuffledStudents);
  //     shuffledStudents[this.index].name = fullName;
  //
  //     this.setState({shuffledStudents});
  //   }
  // }
  //
  // removeStudent = () => {
  //   const fullName = this.fullName.trim();
  //     const shuffledStudents = this.state.shuffledStudents.filter((student) => student.name !== fullName);
  //     this.setState({shuffledStudents});
  //
  // }

  onPlantCreate() {
    console.log(chance.name());
  }

  render() {
    const {
      plants,
      categories,
      rooms,
      userPlants
    } = this.state;

    return (
      <div className="app">
        <Plants
          plants={this.plants}
          // onPlantCreate={this.onPlantCreate}
        />

        <Categories
          categories={this.categories}
        />


        <h1>Rooms</h1>
        <div>
          {plants.map((item) => <div>{item}</div>)}
          <input type="text"/>
        </div>

        <h1>User Plants</h1>
        <div>
          {plants.map((item) => <div>{item}</div>)}
          <input type="text"/>
        </div>
      </div>
    );
  }
}

export default App;