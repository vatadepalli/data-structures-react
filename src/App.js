import React, { Component } from "react";
import "./App.css";

// Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
// import RouteGrouping from "./services/RouteGrouping";

// Route Components
import Navbar from "./layout/Navbar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Algos from "./components/Algos/Algos";
import DS from "./components/DS/DS";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Body} />
          <Route exact path="/algos" component={Algos} />
          <Route exact path="/datastructures" component={DS} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
