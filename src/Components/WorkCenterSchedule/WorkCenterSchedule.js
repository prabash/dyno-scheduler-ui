import React, { Component } from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import { resourcesData, priorityData } from "../../Services/data";
import { shopOrderOperations } from "../../Services/test";
import {
  getScheduledOrders,
  getWCScheduleTest
} from "../../Services/ShopOrderService";

/* CSS */
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.dark.css";

/* Components */
import MenuAppBar from "../MenuAppBar/MenuAppBar";

const currentDate = new Date(2018, 7, 6);
const views = [
  "timelineDay",
  "timelineWeek",
  "timelineWorkWeek",
  "timelineMonth"
];

const soGroups = ["workCenterNo"];
const groups = ["priority"];

class WorkCenterSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedulerHeight : 300
    };
  }

  componentDidMount() {
    
    getScheduledOrders().then(res => {
      // get the service data
      const serviceData = res.data;
      // send the service data to be formatted
      this.formatShopOrderOperationData(serviceData);
    });
  }

  formatShopOrderOperationData(soOperationData){
    var currentData; 
    if (soOperationData == null){
      currentData = shopOrderOperations;
    }
    else{
      console.log("NOT NULL!")
      currentData = soOperationData;
    }
    console.log(currentData);

    const soOperations = [];
    const shopOrders = [];
    const workCenters = [];

    for (var i = 0; i < currentData.length; i++) {
      var soObject = currentData[i];
      let shopOrder = {
        id: soObject.orderNo,
        text: "O" +soObject.orderNo + " : " + soObject.description,
        color: this.getRandomColor()
      };
      shopOrders.push(shopOrder);
      for (var j = 0; j < soObject.operations.length; j++) {
        var operationObj = soObject.operations[j];
        operationObj.appointmentHeader = "OP No: " + operationObj.operationId + ", WC No: " + operationObj.workCenterNo;
        soOperations.push(operationObj);

        let workCenter = {
          id: operationObj.workCenterNo,
          text: "Work Center " + operationObj.workCenterNo + " : " + operationObj.workCenterType,
          color: this.getRandomColor()
        };

        var found = workCenters.some(function (field) {
          return field.wcNo === operationObj.workCenterNo;
        });
        if (!found) { 
          workCenters.push(workCenter);
        }
      }
    }
    console.log("+++++++++++++++++");
    console.log(soOperations);
    console.log(shopOrders);
    console.log(workCenters);

    var slicedWorkCenters =  workCenters.slice(0, 5);
    this.setState({ soOperations, shopOrders, slicedWorkCenters});
    
    // the height of the scheduler is set dynamically, for each of the work center 300 height is set
    var height = workCenters.length * 80;
    this.setState({ schedulerHeight : height });

    alert('Completed Json Manipulation')
  }
  

  getRandomColor (){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const { content, soOperations, shopOrders, workCenters, schedulerHeight } = this.state;
    return (
      <div className="App">
      <MenuAppBar titleText="Work Centre Schedule"/>
        <main id="page-wrap">
          <h1>Work Centre Schedule</h1>

          <div style={{ height: "75%" }}>
            
            <Scheduler
              id="work-center-schedule"
              dataSource={soOperations}
              views={views}
              //maxAppointmentsPerCell={"unlimited"}
              defaultCurrentView={"timelineMonth"}
              defaultCurrentDate={currentDate}
              height={schedulerHeight}
              showCurrentTimeIndicator={true}
              groups={soGroups}
              cellDuration={60}
              firstDayOfWeek={1}
              startDayHour={8}
              endDayHour={17}
              textExpr={"appointmentHeader"}
              startDateExpr={"opStartDateTime"}
              endDateExpr={"opFinishDateTime"}
            >
            <Resource
              fieldExpr={"workCenterNo"}
              allowMultiple={true}
              dataSource={workCenters}
              label={"WorkCenter"}
              useColorAsDefault={true}
            />
            </Scheduler>
          </div>
        </main>
      </div>
    );
  }
}

export default WorkCenterSchedule;
