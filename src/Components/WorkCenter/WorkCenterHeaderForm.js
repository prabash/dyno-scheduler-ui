import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Container, Row, Col } from "react-grid-system";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "red"
  },
  inputColor: {
    color: "white"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  fabContainer: {
    width: "100%"
  }
});

class WorkCenterHeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cat in the Hat",
      age: "",
      multiline: "Controlled",
      currency: "EUR"
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.fabContainer}>
        <Row>
          <Col md={11} />
          <Col md={1}>
            <div style={{ marginRight: 5 }}>
              <Fab
                color="secondary"
                aria-label="Add"
                className={classes.fab}
                onClick={this.onClick}
              >
                <AddIcon />
              </Fab>
            </div>
          </Col>
        </Row>
        <Row>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="work-center-no"
              label="Work Center No"
              defaultValue=" "
              value={this.props.workCenterDetails.workCenterNo}
              className={classes.textField}
              onChange={this.handleChange("workCenterNo")}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="work-center-type"
              label="Work Center Type"
              defaultValue=" "
              value={this.props.workCenterDetails.workCenterType}
              className={classes.textField}
              onChange={this.handleChange("workCenterType")}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="work-center-description"
              label="Description"
              defaultValue=" "
              value={this.props.workCenterDetails.workCenterDescription}
              className={classes.textField}
              onChange={this.handleChange("workCenterDescription")}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="work-center-capacity"
              label="Capacity Type"
              defaultValue=" "
              value={this.props.workCenterDetails.workCenterCapacity}
              className={classes.textField}
              onChange={this.handleChange("workCenterCapacity")}
              margin="normal"
              variant="standard"
            />
          </form>
        </Row>
      </div>
    );
  }
}

WorkCenterHeaderForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkCenterHeaderForm);
