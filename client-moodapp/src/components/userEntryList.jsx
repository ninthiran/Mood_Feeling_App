import React, { Fragment } from "react";
import EmojiFace from "./emojiFace";

const UserEntryList = props => {
  return (
    <Fragment>
      <div className="col-md-auto">
        <p>
          {props.date[0]} <br />
          {props.date[1]}
        </p>
        <p>
          {props.data.bored === 1 ? (
            <span className="btn btn-secondary">bored</span>
          ) : null}
          {props.data.depressed === 1 ? (
            <span className="btn btn-secondary">depressed</span>
          ) : null}
          {props.data.happy === 1 ? (
            <span className="btn btn-secondary">happy</span>
          ) : null}
          {props.data.optimistic === 1 ? (
            <span className="btn btn-secondary">optimistic</span>
          ) : null}
        </p>
        <p>comments: {props.data.comments}</p>
      </div>
      <div className="col">
        <div className="face-container">
          <EmojiFace sliderValue={props.data.mood_range} />
        </div>
      </div>
    </Fragment>
  );
};

export default UserEntryList;
