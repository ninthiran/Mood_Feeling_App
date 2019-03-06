import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CheckInFeature from "./components/checkinFeatures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="main_container">
            <CheckInFeature />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
