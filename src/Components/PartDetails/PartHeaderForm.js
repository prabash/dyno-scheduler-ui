import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
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
    );
  }
}

PartHeaderForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PartHeaderForm);
