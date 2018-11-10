/* Imports */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BurgerMenu from "react-burger-menu";

/* CSS */
import "./Menu.css";

/* Routing */
import WorkCenterSchedule from "../WorkCenterSchedule/WorkCenterSchedule";
import Home from "../Home/Home";

/* MenuWrap Class */
class MenuWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className={this.props.side}>{this.props.children}</div>;
  }
}

/* Menu Class */
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "scaleDown",
      side: "left"
    };
  }

  changeSide(side) {
    this.setState({ side });
  }

  getItems() {
    let items;
    items = [
      <NavLink to="/">
        <span>Home</span>
      </NavLink>,
      <NavLink to="/WorkCenterSchedule">
        <span>Work Center Schedule</span>
      </NavLink>,
      <NavLink to="/Messages">
        <span>Messages</span>
      </NavLink>,
      <NavLink to="/Comments">
        <span>Comments</span>
      </NavLink>,
      <NavLink to="/Analytics">
        <span>Analytics</span>
      </NavLink>,
      <NavLink to="/Contact">
        <span>Contact</span>
      </NavLink>
    ];

    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    return (
      <MenuWrap wait={20}>
        <Menu
          id={this.state.currentMenu}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          {items}
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    return (
      <Router>
        <div id="outer-container" style={{ height: "100%" }}>
          {this.getMenu()}
          <Route exact path="/" component={Home} />
          <Route path="/WorkCenterSchedule" component={WorkCenterSchedule} />
        </div>
      </Router>
    );
  }
}
