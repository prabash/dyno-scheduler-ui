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


class ShopOrderHeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cat in the Hat",
      age: "",
      multiline: "Controlled",
      currency: "EUR",
      currentShopOrder: {}
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { currentShopOrder } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="order-no"
          label="Order No"
          defaultValue=" "
          value={this.props.shopOrderDetails.orderNo}
          className={classes.textField}
          onChange={this.handleChange("orderNo")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="description"
          label="Description"
          defaultValue=" "
          value={this.props.shopOrderDetails.description}
          className={classes.textField}
          onChange={this.handleChange("description")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="created-date"
          label="Created Date"
          type="date"
          defaultValue="2000-01-01"
          value={this.props.shopOrderDetails.createdDate}
          className={classes.textField}
          onChange={this.handleChange("createdDate")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="part-no"
          label="Part No"
          defaultValue=" "
          value={this.props.shopOrderDetails.partNo}
          className={classes.textField}
          onChange={this.handleChange("partNo")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="structure-revision"
          label="Structure Revision"
          defaultValue=" "
          value={this.props.shopOrderDetails.structureRevision}
          className={classes.textField}
          onChange={this.handleChange("structureRevision")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="routing-revision"
          label="Routing Revision"
          defaultValue=" "
          value={this.props.shopOrderDetails.routingRevision}
          className={classes.textField}
          onChange={this.handleChange("routingRevision")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="required-date"
          label="Required Date"
          type="date"
          defaultValue="2000-01-01"
          value={this.props.shopOrderDetails.requiredDate}
          className={classes.textField}
          onChange={this.handleChange("requiredDate")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          defaultValue="2000-01-01"
          value={this.props.shopOrderDetails.startDate}
          className={classes.textField}
          onChange={this.handleChange("startDate")}
          margin="normal"
          variant="standard"
        />
        <TextField
          id="finish-date"
          label="Finish Date"
          type="date"
          defaultValue="2000-01-01"
          value={this.props.shopOrderDetails.finishDate}
          className={classes.textField}
          onChange={this.handleChange("finishDate")}
          margin="normal"
          variant="standard"
        />
        <TextField
          select
          id="scheduling-direction"
          label="Scheduling Direction"
          InputProps={{
            startAdornment: <InputAdornment variant="filled" position="end" />
          }}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes
            }
          }}
          value={this.props.shopOrderDetails.schedulingDirection}
          onChange={this.handleChange("schedulingDirection")}
          margin="normal"
          variant="standard"
        >
          {this.props.schedulingDirectionList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="customer-no"
          label="Customer No"
          defaultValue=" "
          value={this.props.shopOrderDetails.customerNo}
          className={classes.textField}
          onChange={this.handleChange("customerNo")}
          margin="normal"
          variant="standard"
        />
        <TextField
          select
          id="scheduling-status"
          label="Scheduling Status"
          InputProps={{
            startAdornment: <InputAdornment variant="filled" position="end" />
          }}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes
            }
          }}
          value={this.props.shopOrderDetails.schedulingStatus}
          onChange={this.handleChange("schedulingStatus")}
          margin="normal"
          variant="standard"
        >
          {this.props.schedulingStatusList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="shop-order-status"
          label="Shop Order Status"
          InputProps={{
            startAdornment: <InputAdornment variant="filled" position="end" />
          }}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes
            }
          }}
          value={this.props.shopOrderDetails.shopOrderStatus}
          onChange={this.handleChange("shopOrderStatus")}
          margin="normal"
          variant="standard"
        >
          {this.props.shopOrderStatusList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="priority"
          label="Priority"
          InputProps={{
            startAdornment: <InputAdornment variant="filled" position="end" />
          }}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes
            }
          }}
          value={this.props.shopOrderDetails.priority}
          onChange={this.handleChange("priority")}
          margin="normal"
          variant="standard"
        >
          {this.props.priorityList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="revenue-value"
          label="Revenue Value"
          InputProps={{
            startAdornment: <InputAdornment variant="filled" position="end" />
          }}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes
            }
          }}
          value={this.props.shopOrderDetails.revenueValue}
          onChange={this.handleChange("priority")}
          margin="normal"
          variant="standard"
        >
          {this.props.revenueValueList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    );
  }
}

ShopOrderHeaderForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShopOrderHeaderForm);
