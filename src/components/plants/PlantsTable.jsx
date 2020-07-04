import React from "react";
import Plant from "components/plants/Plant";
import { Table } from 'reactstrap';


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
        </tr>
      </thead>
      <tbody>

        {plants.map((plant, index, arr) => (
          <Plant plant={plant} index={index} />

        ))}
      </tbody>
    </Table>
  )
}

export default PlantsTable;