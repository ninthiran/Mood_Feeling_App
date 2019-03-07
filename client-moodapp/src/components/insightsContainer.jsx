import React, { Component, Suspense } from "react";
import { Doughnut } from "react-chartjs-2";
import api from "../API/api";
import UserEntryList from "./userEntryList";

class InsightsContainer extends Component {
  state = {
    rows: [],
    averageValue: null
  };

  componentDidMount = () => {
    api.getDataList().then(res => {
      const rows = res.data.rows;
      this.setState({ rows });
      this.percentageGenerater();
    });
  };

  percentageGenerater = () => {
    const moodrangeValues = this.state.rows.map(x => {
      return x.mood_range;
    });
    const totalMoodValue =
      moodrangeValues.reduce((a, b) => a + b) / moodrangeValues.length;
    const totalValue = 7;
    if (isNaN(totalValue) || isNaN(totalMoodValue)) {
      this.setState({ averageValue: 1 });
    } else {
      this.setState({
        averageValue: Math.round((totalMoodValue / totalValue) * 100)
      });
    }
  };

  userBoxes = x => {
    const dateObj = new Date(x.time.split(" ")[0]);
    const date = dateObj.getDate();
    const month = dateObj.toLocaleString("en-us", { month: "short" });
    return (
      <div className="row" key={x.Entry_ID}>
        <UserEntryList data={x} date={[date, month]} />
      </div>
    );
  };

  render() {
    const data = {
      labels: [],
      datasets: [
        {
          data: [100 - this.state.averageValue, 0 + this.state.averageValue],
          backgroundColor: ["#217e67", "#32ddb2"],
          borderColor: "#dbd5d5"
        }
      ]
    };
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Doughnut
                data={data}
                options={{
                  tooltips: {
                    enabled: false
                  }
                }}
              />
            </div>
            <div className="col">
              <h1>{this.state.averageValue}% </h1>
              <p>Based on {this.state.rows.length} entries</p>
            </div>
          </div>
          {this.state.rows.map(x => this.userBoxes(x))}
        </div>
      </Suspense>
    );
  }
}

export default InsightsContainer;
