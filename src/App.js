import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="Test1"
            email="test@test.com"
            phone="555-555-5555"
          />
          <Contact
            name="Test2"
            email="test1@test1.com"
            phone="333-333-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
