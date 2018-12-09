import React, { Component } from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import { resourcesData, priorityData } from "../../Services/data";
import { shopOrderOperations } from "../../Services/test";
import {
  getWCSchedule,
  getWCScheduleTest
} from "../../Services/GetShopOrderScheduleService";
import ShopOrderSchedulerAppointmentCell from "./ShopOrderSchedulerAppointmentCell";

/* CSS */
import "./ShopOrderSchedule.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.dark.css";

const currentDate = new Date(2018, 7, 6);
const views = [
  "timelineDay",
  "timelineWeek",
  "timelineWorkWeek",
  "timelineMonth"
];
const soGroups = ["orderNo"];
const groups = ["priority"];

class ShopOrderSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getWCScheduleTest().then(res => {
      const content = res.data;
      for (var i = 0; i < res.data.length; i++) {
        var obj = res.data[i];
        obj.key = i;
      }
      console.log(content);
      this.setState({ content });
    });
    
    getWCSchedule().then(res => {
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
        text: "Order " +soObject.orderNo + " : " + soObject.description,
        color: this.getRandomColor()
      };
      shopOrders.push(shopOrder);
      for (var j = 0; j < soObject.operations.length; j++) {
        var operationObj = soObject.operations[j];
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

    this.setState({ soOperations, shopOrders, workCenters});
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
    const { content, soOperations, shopOrders, workCenters } = this.state;
    return (
      <div className="App">
        <main id="page-wrap">
          <h1>Shop Order Schedule</h1>

          <div style={{ height: "75%" }}>
            
            <Scheduler
              id="work-center-schedule"
              dataSource={soOperations}
              views={views}
              //appointmentComponent={ShopOrderSchedulerAppointmentCell}
              defaultCurrentView={"timelineMonth"}
              defaultCurrentDate={currentDate}
              height={600}
              groups={soGroups}
              cellDuration={60}
              firstDayOfWeek={0}
              startDayHour={8}
              endDayHour={17}
              textExpr={"operationId"}
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
              <Resource
                fieldExpr={"orderNo"}
                allowMultiple={false}
                dataSource={shopOrders}
                label={"ShopOrder"}
              />
            </Scheduler>
          </div>
        </main>
      </div>
    );
  }
}

export default ShopOrderSchedule;
