import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody, CardHeader } from 'reactstrap';

const PlantCreate = (props) => {
  return (
    <Card className="mb-4" color="light">
      <CardHeader>
        Create Plant:
      </CardHeader>
      <CardBody>
        <h3 className="mb-4">Create plant</h3>
        <PlantForm { ...props } abc={(abc) => console.log(abc)}/>
      </CardBody>
    </Card>
  );
};

PlantCreate.propTypes = {};

export default PlantCreate;
