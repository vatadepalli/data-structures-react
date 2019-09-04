import React, { Component } from "react";
import "./App.css";

// Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
// import RouteGrouping from "./services/RouteGrouping";

// Route Components
import Navbar from "./layout/Navbar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Body} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
