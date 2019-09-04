import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      link: props.link
    };
  }
  render() {
    return (
      <li className="nav-item active">
        <Link to={this.props.link} className="nav-link">
          <button className="btn btn-theme" type="button">
            {this.props.name}
          </button>
        </Link>
      </li>
    );
  }
}
