import React from 'react';
import 'App.scss';
import Chance from 'chance';
import Plants from 'components/Plants';

const chance = new Chance();

// const chance = require('chance');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initPlants();
    this.initCategories();
    this.initRooms();
    this.state = {
      plants: [],
      categories: [],
      rooms: [],
    };
  }

  initPlants() {
    const plants = [];
    this.plants = plants;
  }

  initCategories() {
    const categories = [];
    this.categories = categories;
  }

  initRooms() {
    const rooms = [];
    this.rooms = rooms;
  }

  handleInputChange = (event) => {
    this.setState({fullName: event.currentTarget.value});
  }

  sortStudents = () => {
    const sortCriteria = [
      {key: "coffees", direction: "asc"},
      {key: "name", direction: "desc"},
    ];
    this.setState({
      sortedStudents: this.students.getSortedStudents(sortCriteria)
    });
  }

  shuffleStudents = () => {
    this.setState({
      shuffledStudents: this.students.getShuffledStudents()
    });
  }

  onFullNameChange = (event) => {
    if (this.index === -1) {
      this.index = this.state.shuffledStudents.findIndex((student) => student.name === 'Tajemnicza studentka');
    }
    this.handleInputChange(event);

    if (this.index !== -1) {
      this.fullName = event.currentTarget.value;
    }
  }

  updateStudent = () => {
    const fullName = this.fullName.trim();
    if (fullName) {
      const shuffledStudents = this.students.copy(this.state.shuffledStudents);
      shuffledStudents[this.index].name = fullName;

      this.setState({shuffledStudents});
    }
  }

  removeStudent = () => {
    const fullName = this.fullName.trim();
      const shuffledStudents = this.state.shuffledStudents.filter((student) => student.name !== fullName);
      this.setState({shuffledStudents});

  }

  onPlantCreate() {

    console.log(chance.name());
  }

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

        <h1>Categories</h1>
        <div>
          { plants.map((item) => <div>{item}</div>) }
          <input type="text" />
        </div>

        <h1>Rooms</h1>
        <div>
          { plants.map((item) => <div>{item}</div>) }
          <input type="text" />
        </div>
      </div>
    );
  }

}

export default App;