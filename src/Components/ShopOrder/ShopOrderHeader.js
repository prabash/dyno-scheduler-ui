import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { Container, Row, Col } from "react-grid-system";

/* CSS */
import "./ShopOrderHeader.css";

/* Components */
import ShopOrderHeaderForm from "./ShopOrderHeaderForm";
import MenuAppBar from "../MenuAppBar/MenuAppBar";
import ShopOrderOperationsTable from "../ShopOrder/ShopOrderOperationsTable";
import { getWCSchedule } from "../../Services/GetShopOrderScheduleService";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  fab: {}
});

class ShopOrderHeader extends Component {
  constructor(props) {
    super(props);
    this.onShopOrderNoChanged = this.onShopOrderNoChanged.bind(this);
    this.state = {
      shopOrderNos: [],
      shopOrders: [],
      selectedOrderNo: 0
    };
  }

  componentDidMount() {
    getWCSchedule().then(res => {
      // get the service data
      const serviceData = res.data;
      // send the service data to be formatted
      this.formatShopOrderOperationData(serviceData);
    });
  }

  formatShopOrderOperationData(soOperationData) {
    var currentData;
    if (soOperationData != null) {
      currentData = soOperationData;
    }
    console.log(currentData);

    const shopOrderNos = [];
    const shopOrders = [];
    // Push first default order no.
    shopOrderNos.push({
      value: -1,
      label: "Select Order No"
    });
    for (var i = 0; i < currentData.length; i++) {
      var soObject = currentData[i];
      let shopOrder = {
        id: soObject.orderNo,
        text: "Order " + soObject.orderNo + " : " + soObject.description
      };

      shopOrderNos.push({
        value: soObject.orderNo,
        label: soObject.orderNo
      });
      shopOrders.push(shopOrder);
    }

    console.log(shopOrderNos);

    this.setState({ shopOrderNos, shopOrders });
  }

  onShopOrderNoChanged = name => event => {
    this.setState({
      selectedOrderNo: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    const { shopOrderNos, shopOrders, selectedOrderNo } = this.state;
    return (
      <div className="App">
        <MenuAppBar
          titleText="Shop Order"
          shopOrderIds={shopOrderNos}
          currentOrderNo={selectedOrderNo}
          orderNoChangedEvent={this.onShopOrderNoChanged}
        />

        <main id="page-wrap">
          <div>
            <Row>
              <Col md={11}/>
              <Col md={1}>
                <div style={{ marginRight: 5}}>
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

          <h1>Shop Order</h1>
          <ShopOrderHeaderForm />
          <ShopOrderOperationsTable />
        </main>
      </div>
    );
  }
}

ShopOrderHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ShopOrderHeader);
