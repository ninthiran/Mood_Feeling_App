import React, { Component } from "react";
import MoodRangeSlider from "./moodRange";
import FeelingButtons from "./feelingButtons";
import api from "../API/api";

class CheckInFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  moodChange = event => {
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
        obj.text === innerText
          ? Object.assign(obj, {
              isActive: !this.state.FeelingArray[id].isActive
            })
          : obj
      )
    }));
  };

  commentsChange = event => {
    const comments = event.target.value;
    this.setState({ comments });
  };

  postAction = () => {
    api.postDataList(this.state);
    this.props.onComplete();
  };

  render() {
    return (
      <div className="component_container">
        {this.state.pageTwoEnable ? (
          <div>
            <FeelingButtons
              feelings={this.state.FeelingArray}
              onFeelingsSelected={this.feelingsSelection}
            />
            <textarea
              name="body"
              className="form-control"
              onChange={this.commentsChange}
            />
            {this.state.FeelingArray.filter(x => {
              return x.isActive === true;
            }).length > 0 ? (
              <div
                className="btn btn-block btn-primary btn-post"
                onClick={this.postAction}
              >
                Post
              </div>
            ) : null}
          </div>
        ) : (
          <MoodRangeSlider
            sliderValue={this.state.moodRangeValue}
            onhandleChange={this.moodChange}
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
