import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import api from "../API/api";

var options = {
  tooltips: {
    enabled: false
  }
};
class InsightsContainer extends Component {
  state = {};

  componentDidMount = () => {
    api.getDataList().then(res => {
      const rows = res.data.rows;
      console.log(rows);
    });
  };

  render() {
    const data = {
      labels: [],
      datasets: [
        {
          data: [50, 100],
          backgroundColor: ["#217e67", "#32ddb2"],
          borderColor: "#dbd5d5"
        }
      ]
    };
    return (
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
            <h1>Text</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default InsightsContainer;
