import React, { Component } from "react";
import MoodRangeSlider from "./moodRange";
import FeelingButtons from "./feelingButtons";

class CheckInFeature extends Component {
  state = {
    moodRangeValue: "1",
    FeelingArray: [
      { text: "depressed", isActive: false },
      { text: "optimistic", isActive: false },
      { text: "bored", isActive: false },
      { text: "happy", isActive: false }
    ],
    comments: "",
    pageTwoEnable: false
  };

  handleChange = event => {
    this.setState({ moodRangeValue: event.target.value });
  };

  togglePage = () => {
    this.setState({ pageTwoEnable: !this.state.pageTwoEnable });
  };

  feelingsSelection = event => {
    const innerText = event.target.innerText;
    const id = event.target.id;

    this.setState(prevState => ({
      FeelingArray: prevState.FeelingArray.map(obj =>
        obj.text == innerText
          ? Object.assign(obj, {
              isActive: !this.state.FeelingArray[id].isActive
            })
          : obj
      )
    }));
  };

  render() {
    return (
      <div className="component_container">
        {this.state.pageTwoEnable ? (
          <FeelingButtons
            feelings={this.state.FeelingArray}
            onFeelingsSelected={this.feelingsSelection}
          />
        ) : (
          <MoodRangeSlider
            sliderValue={this.state.moodRangeValue}
            onhandleChange={this.handleChange}
          />
        )}
        <div className="btn btn-block btn-light" onClick={this.togglePage}>
          {!this.state.pageTwoEnable ? "Next" : "Back"}
        </div>
      </div>
    );
  }
}

export default CheckInFeature;
