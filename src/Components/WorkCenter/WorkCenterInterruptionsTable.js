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