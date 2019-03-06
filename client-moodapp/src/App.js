import React, { Component } from "react";
import "./App.css";
import CheckInFeature from "./components/checkinFeatures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheckInFeature />
      </div>
    );
  }
}

export default App;
