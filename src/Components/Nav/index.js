import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo" />
        <ul>
          <li>
            <Link to={ROUTES.READ} className="links">
              ReadList
            </Link>
          </li>
          <li>
            <Link to={ROUTES.WISH} className="links">
              WishList
            </Link>
          </li>
        </ul>
        <button onClick={this.props.popUp} className="addBook show">
          <i
            className="fas fa-plus"
            style={{ fontSize: "0.9em", marginRight: "5px" }}
          />
          Add
        </button>
      </nav>
    );
  }
}

/*const Nav = () => (
  <nav>
    <div className="logo" />
    <ul>
      <li>
        <Link to={ROUTES.READ} className="links">
          ReadList
        </Link>
      </li>
      <li>
        <Link to={ROUTES.WISH} className="links">
          WishList
        </Link>
      </li>
    </ul>
  </nav>
);*/

export default Nav;
