import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {
    return (
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{this.props.plant.name}</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    )
  }

}

Plant.propTypes = {
  plant: PropTypes.object.isRequired
};

export default Plant;