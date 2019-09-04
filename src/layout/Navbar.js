import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: []
    };
  }
  async componentDidMount() {}

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        {/* Branding */}
        <Link to="/" className="navbar-brand">
          <img
            src="assets/WordArt.png"
            height="35"
            className="d-inline-block align-top"
            alt=""
          />
        </Link>

        {/* collapse Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* collapsable bar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* UL of Nav Items */}
          <ul className="navbar-nav mr-auto">
            {/* Home */}
            <NavItem name={"Home"} link={"/"} />
            <NavItem name={"Algorithms"} link={"/algos"} />
            <NavItem name={"Data Structures"} link={"/datastructures"} />

            {/*<NavItemCollapse
              name={"Data Structures"}
              link={"/"}
              items={[{ name: "Banna", link: "/" }]}
            />*/}
          </ul>
          <ul className="navbar-nav float-right">
            <NavItem name={"Login"} link={"/login"} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
