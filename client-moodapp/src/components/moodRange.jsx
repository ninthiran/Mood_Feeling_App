import React, { Fragment } from "react";

const MoodRangeSlider = props => {
  return (
    <Fragment>
      <div id="face">
        <div id="mouth-box" className={`mood_${props.sliderValue}`}>
          <div id="mouth" className={`mood_${props.sliderValue}`} />
        </div>
      </div>
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
