import React from "react";
import { Button, Card, CardBody, Col, FormGroup, InputGroup, InputGroupAddon, Label, Row } from 'reactstrap';
import TopHeaderWithActionButton from 'components/shared/TopHeaderWithActionButton';
import { Field, Form, Formik } from 'formik';
import PlantasticInput from 'components/shared/form/PlantasticInput';

const AccountPage = () => {

  const initialValues = {
    newsletterDays: 14
  };

  const onClickPlusButton = () => {
    console.log('Plus!');
  };

  const onClickMinusButton = () => {
    console.log('Minus!');
  };

  return (
    <Card>
      <CardBody>
        <TopHeaderWithActionButton title="Account preferences"></TopHeaderWithActionButton>
        <Row>
          <Col xl={ 6 }>
            <Formik initialValues={ initialValues }>
              { ({ isValid }) => (
                <Form>
                  <FormGroup className="required">
                    <Label htmlFor="newsletterDays>">How frequently you want to get newsletter:</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button onClick={onClickPlusButton}>+</Button>
                      </InputGroupAddon>
                      <Field
                        id="newsletterDays"
                        name="newsletterDays"
                        type="text"
                        placeholder="14…"
                        component={ PlantasticInput }
                      />
                      <InputGroupAddon addonType="append">
                        <Button onClick={onClickMinusButton}>–</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              ) }
            </Formik>

          </Col>
          <Col xl={ 6 }></Col>
        </Row>

      </CardBody>
    </Card>


  );

};

export default AccountPage;