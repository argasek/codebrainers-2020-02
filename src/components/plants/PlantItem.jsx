import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class PlantItem extends React.PureComponent {

  render() {
    const {plant} = this.props;
    const {name, difficulty, room, categorySlug, lastWatered} = plant;
    return (
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{name}</td>
        <td>{categorySlug}</td>
        <td>{difficulty}</td>
        <td>{room}</td>
        <td>{lastWatered}</td>
      </tr>
    )
  }

//   blooming: false
// category: 5
// category_slug: "green-plants"
// difficulty: 4
// fertilizing_interval: 1209600
// id: 10
// last_fertilized: "2020-04-20T19:32:55Z"
// last_watered: "2020-04-05T20:00:55Z"
// name: "Licuala grandis"
// required_exposure: "partsun"
// required_humidity: "high"
// required_temperature: "warm"
// room: 1
// url: "http://gentle-tor-07382.herokuapp.com/plants/10/"
// watering_interval: 604800

}

PlantItem.propTypes = {
  plant: PropTypes.object.isRequired
};

export default PlantItem;