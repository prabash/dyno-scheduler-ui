import React, { Component } from "react";
import PropTypes, { func } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "react-grid-system";
import { formatDate } from "../../Global/DateTimeUtil";
import { interruptWorkCenter } from "../../Services/GetShopOrderScheduleService";

import MenuAppBar from "../MenuAppBar/MenuAppBar";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  fab: {}
});

class WorkCenterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  interruptWC = () => event => {
    interruptWorkCenter().then(res => {
      // get the service data
      const serviceData = res.data;
      alert("Successfully Interrupted Work Center 02")
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <MenuAppBar titleText="Work Center" />

        <main id="page-wrap">
          <div>
            <Row>
              <Col md={11} />
              <Col md={1}>
                <div style={{ marginRight: 5 }}>
                  <Fab
                    color="secondary"
                    aria-label="Add"
                    className={classes.fab}
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </Col>
            </Row>
          </div>

          <h1>Work Center</h1>
          <div>
            <Row>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.interruptWC()}
              >
                Interrupt Work Center 02
              </Button>
            </Row>
            <Row>&nbsp;</Row>
            <Row />
          </div>
        </main>
      </div>
    );
  }
}

WorkCenterHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(WorkCenterHeader);
