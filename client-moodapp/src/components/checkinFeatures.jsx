import React, { Component } from "react";
import MoodRangeSlider from "./moodRange";

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

  render() {
    return (
      <div>
        <MoodRangeSlider />
      </div>
    );
  }
}

export default CheckInFeature;
