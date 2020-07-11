import React from "react";
import {Button, Card, CardBody, Col, FormGroup, InputGroup, InputGroupAddon, Label, Row} from 'reactstrap';
import TopHeaderWithActionButton from 'components/shared/TopHeaderWithActionButton';
import {Field, Form, Formik} from 'formik';
import PlantasticInput from 'components/shared/form/PlantasticInput';
import {connect} from "react-redux";
import {decrementNewsletter, incrementNewsletter} from "./ducks/actions";

const AccountPage = ({newsletterDays, dispatch}) => {

  const initialValues = {
    newsletterDays
  };

  const onClickPlusButton = () => {
    dispatch (incrementNewsletter() );
  };

  const onClickMinusButton = () => {
    dispatch (decrementNewsletter() );
  };

  debugger;
  return (
    <Card>
      <CardBody>
        {newsletterDays}
        <TopHeaderWithActionButton title="Account preferences"></TopHeaderWithActionButton>
        <Row>
          <Col xl={6}>
            <Formik initialValues={initialValues}>
              {({isValid}) => (
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
                        component={PlantasticInput}
                      />
                      <InputGroupAddon addonType="append">
                        <Button onClick={onClickMinusButton}>–</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              )}
            </Formik>

          </Col>
          <Col xl={6}></Col>
        </Row>

      </CardBody>
    </Card>


  );

};

const mapStateToProps = (state) => {
  return {
    newsletterDays: state.newsletter
  };
};

export default connect(mapStateToProps)(AccountPage);