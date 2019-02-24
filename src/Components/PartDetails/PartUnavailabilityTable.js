import React from "react";
import Button from "devextreme-react/button";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup
} from "devextreme-react/data-grid";

class PartUnavailabilityTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  onRowInserting = event => {
    let unavailabilityDetails = {
        "partNo": event.data.partNo,
        "unavailableFromDate": event.data.unavailableFromDate,
        "unavailableFromTime": event.data.unavailableFromTime,
        "unavailableToDate": event.data.unavailableToDate,
        "unavailableToTime": event.data.unavailableToTime
    };
  };

  onRowUpdating = event => {
    let unavailabilityDetails = {
        "id": event.data.id,
        "partNo": event.data.partNo,
        "unavailableFromDate": event.data.unavailableFromDate,
        "unavailableFromTime": event.data.unavailableFromTime,
        "unavailableToDate": event.data.unavailableToDate,
        "unavailableToTime": event.data.unavailableToTime
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

          <Column dataField={"id"} />
          <Column dataField={"partNo"} />
          <Column dataField={"unavailableFromDate"} />
          <Column dataField={"unavailableFromTime"} />
          <Column dataField={"unavailableToDate"} />
          <Column dataField={"unavailableToTime"} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default PartUnavailabilityTable;