import React, { Component } from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import { resourcesData, priorityData } from "../../Services/data";
import { getWCSchedule } from "../../Services/GetWorkCenterScheduleService";

/* CSS */
import "./WorkCenterSchedule.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.dark.css";

const currentDate = new Date(2017, 3, 1);
const views = [
  "timelineDay",
  "timelineWeek",
  "timelineWorkWeek",
  "timelineMonth"
];
const groups = ["priority"];

class WorkCenterSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getWCSchedule().then(res => {
      const content = res.data;
      for (var i = 0; i < res.data.length; i++) {
        var obj = res.data[i];
        obj.key = i;
      }
      console.log(content);
      this.setState({ content });
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div className="App">
        <main id="page-wrap">
          <h1>Work Center Schedule</h1>

          <div style={{ height: "75%" }}>
            <Scheduler
              id="work-center-schedule"
              dataSource={content}
              views={views}
              defaultCurrentView={"timelineMonth"}
              defaultCurrentDate={currentDate}
              height={600}
              groups={groups}
              cellDuration={60}
              firstDayOfWeek={0}
              startDayHour={8}
              endDayHour={17}
              textExpr={"text"}
              startDateExpr={"startDate"}
              endDateExpr={"endDate"}
            >
              <Resource
                fieldExpr={"ownerId"}
                allowMultiple={true}
                dataSource={resourcesData}
                label={"Owner"}
                useColorAsDefault={true}
              />
              <Resource
                fieldExpr={"priority"}
                allowMultiple={false}
                dataSource={priorityData}
                label={"Priority"}
              />
            </Scheduler>
          </div>
        </main>
      </div>
    );
  }
}

export default WorkCenterSchedule;
