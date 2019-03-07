import React, { Fragment } from "react";

const EmojiFace = props => {
  return (
    <Fragment>
      <div id="face">
        <div id="mouth-box" className={`mood_${props.sliderValue}`}>
          <div id="mouth" className={`mood_${props.sliderValue}`} />
        </div>
      </div>
    </Fragment>
  );
};

export default EmojiFace;
