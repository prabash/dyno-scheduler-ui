import React, { Component } from "react";

/* CSS */
import "./ShopOrderHeader.css";

/* Components */
import ShopOrderHeaderForm from "./ShopOrderHeaderForm";
import MenuAppBar from "../MenuAppBar/MenuAppBar";
import ShopOrderOperationsTable from "../ShopOrder/ShopOrderOperationsTable"

class ShopOrderHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <MenuAppBar titleText="Shop Order" />
        <main id="page-wrap">
          <h1>Shop Order</h1>
          <ShopOrderHeaderForm />
          <ShopOrderOperationsTable/>
        </main>
      </div>
    );
  }
}

export default ShopOrderHeader;
