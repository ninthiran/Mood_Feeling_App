import React, { Fragment } from "react";
import EmojiFace from "./emojiFace";

const MoodRangeSlider = props => {
  return (
    <Fragment>
      <EmojiFace sliderValue={props.sliderValue} />
      <input
        className="custom-range"
        type="range"
        min="1"
        max="7"
        value={props.sliderValue}
        onChange={props.onhandleChange}
        step="1"
      />
    </Fragment>
  );
};

export default MoodRangeSlider;
