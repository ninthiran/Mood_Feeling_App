import React from "react";

const FeelingButtons = props => {
  var btnClass = "btn btn-outline-light text-dark";
  return (
    <div id="feelingsbtn">
      {props.feelings.map((x, y) => (
        <button
          className={x.isActive === true ? btnClass + " active" : btnClass}
          onClick={props.onFeelingsSelected}
          key={y}
          id={y}
        >
          {x.text}
        </button>
      ))}
    </div>
  );
};

export default FeelingButtons;
