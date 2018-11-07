import React, { Component } from "react";
import Gantt from "../../Global/Gantt";
import GanttToolBar from "../../Global/GanttToolBar";

var data = {
  data: [
    {
      id: 1,
      text: "Task #1",
      start_date: "15-04-2017",
      duration: 1,
      progress: 0.6,
      calendar_id: "custom"
    },
    {
      id: 2,
      text: "Task #2",
      start_date: "18-04-2017",
      duration: 1,
      progress: 0.4,
      calendar_id: "custom"
    }
  ],
  links: [{ id: 1, source: 1, target: 2, type: "0" }]
};

export default class WorkCenterGantt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoom: "Days"
    };
  }

  handleZoomChange = zoom => {
    this.setState({
      currentZoom: zoom
    });
  };

  render() {
    return (
      <div className="App">
        <main id="page-wrap">
          <h1>Work Center Gantt </h1>
          <div style={{ height: "5%" }}>
            <GanttToolBar
              zoom={this.state.currentZoom}
              onZoomChange={this.handleZoomChange}
            />
          </div>

          <div style={{ height: "75%" }}>
            <Gantt tasks={data} zoom={this.state.currentZoom} />
          </div>
        </main>
      </div>
    );
  }
}
