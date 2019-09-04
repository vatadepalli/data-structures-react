import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class NavItemCollapse extends Component {
  render() {
    function capitalize(s) {
      return s.replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
      });
    }

    return (
      <li className="nav-item dropdown">
        <Link
          to={this.props.link}
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
          aria-haspopup="true"
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
        >
          <button className="btn btn-theme">{this.props.name}</button>
        </Link>
        {/* Dropdown Items */}
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* Iterate over dropdown items */}
          {this.props.items.map((i, index) => {
            // Generate Nav Link
            var link =
              "/Content/" +
              `${this.props.name}` +
              "/" +
              i.name.replace(/\s/g, "-");
            // Render
            return (
              <Fragment key={index}>
                {i.separator_top && <div className="dropdown-divider" />}
                <Link className="dropdown-item" to={link}>
                  {capitalize(i.name.replace(/-/g, " "))}
                </Link>
                {i.separator_bottom && <div className="dropdown-divider" />}
              </Fragment>
            );
          })}
        </div>
      </li>
    );
  }
}
