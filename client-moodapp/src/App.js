import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CheckInFeature from "./components/checkinFeatures";
import InsightsContainer from "./components/insightsContainer";

let postSucess = false;

class App extends Component {
  state = {
    postSucess: false
  };

  sucessAction = () => {
    this.setState({ postSucess: !this.state.postSucess });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="main_container">
            {!this.state.postSucess ? (
              <CheckInFeature onComplete={this.sucessAction} />
            ) : (
              <InsightsContainer />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
