import React from "react";
import Button from "devextreme-react/button";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup
} from "devextreme-react/data-grid";

class WorkCenterInterruptionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  onRowInserting = event => {
    let interruptionDetail = {
        "workCenterNo": event.data.workCenterNo,
        "interruptionFromDate": event.data.interruptionFromDate,
        "interruptionFromTime": event.data.interruptionFromTime,
        "interruptionToDate": event.data.interruptionToDate,
        "interruptionToTime": event.data.interruptionToTime
    };
  };

  onRowUpdating = event => {
    let interruptionDetail = {
        "id": event.data.id,
        "workCenterNo": event.data.workCenterNo,
        "interruptionFromDate": event.data.interruptionFromDate,
        "interruptionFromTime": event.data.interruptionFromTime,
        "interruptionToDate": event.data.interruptionToDate,
        "interruptionToTime": event.data.interruptionToTime
    };
  };

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id={"gridContainer"}
          dataSource={this.props.workCenterInterruptions}
          keyExpr={"id"}
          allowColumnReordering={true}
          showBorders={true}
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}
        >
          <Paging enabled={true} />
          <Editing
            mode={"row"}
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
          />

          <Column dataField={"id"} enabled={false} />
          <Column dataField={"workCenterNo"} />
          <Column dataField={"interruptionFromDate"} />
          <Column dataField={"interruptionFromTime"} />
          <Column dataField={"interruptionToDate"} />
          <Column dataField={"interruptionToTime"} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default WorkCenterInterruptionsTable;
