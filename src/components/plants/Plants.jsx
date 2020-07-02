import {Card, CardBody} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Plant from "components/plants/Plant";
import InProgress from "components/shared/InProgress";
import {Table} from 'reactstrap';

const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      successPlants: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.fetchPlants().finally(() => {
      this.setState({inProgress: false});
    });
  }

  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({inProgress: true});
    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios
        .get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => item.name);
          const successPlants = true;
          this.setState({plants, successPlants});
          resolve();
        })
        .catch((error) => {
          this.setState({successPlants: false});
          reject();
        });
    });
  }

  render() {
    const {plants, successPlants, inProgress} = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={inProgress}/>
          {successPlants === false && <p>Nie udało się pobrać Kwiatow</p>}
          {successPlants && (
            <Table striped>
              <thead>
              <tr>
                <th>#</th>
                <th>Plant Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
              </thead>
              <tbody>

              {plants.map((plant, index, arr) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{plant}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>

              ))}
              </tbody>

            </Table>
          )}
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
