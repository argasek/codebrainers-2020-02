import React from "react";
import PlantItem from "components/plants/PlantItem";
import {Table} from 'reactstrap';


const PlantsTable = (props) => {
  const {
    plants
  } = props;
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Plant Name</th>
          <th>Category</th>
          <th>Difficulty</th>
          <th>Room</th>
          <th>Last Watered</th>
        </tr>
      </thead>
      <tbody>

        {plants.map((plant, index, arr) => (
          <PlantItem plant={plant} index={index} />

        ))}
      </tbody>
    </Table>
  )
}

export default PlantsTable;