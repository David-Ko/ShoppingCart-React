import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
