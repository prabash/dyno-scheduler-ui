import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Row, Col } from "react-grid-system";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing.unit,
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
    width: "200%"
  }
});


class PartHeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cat in the Hat",
      age: "",
      multiline: "Controlled"
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
          id="part-no"
          label="Part No"
          defaultValue=" "
          value={this.props.partDetails.partNo}
          className={classes.textField}
          onChange={this.handleChange("partNo")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="part-description"
          label="Part Type"
          defaultValue=" "
          value={this.props.partDetails.partDescription}
          className={classes.textField}
          onChange={this.handleChange("partDescription")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="part-vendor"
          label="Vendor"
          defaultValue=" "
          value={this.props.partDetails.vendor}
          className={classes.textField}
          onChange={this.handleChange("vendor")}
          margin="normal"
          variant="standard"
        />
      </form>
        </Row>
      </div>
    );
  }
}

PartHeaderForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PartHeaderForm);
