import React from "react";
import Button from "devextreme-react/button";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup
} from "devextreme-react/data-grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id={"gridContainer"}
          dataSource={this.props.shopOrderOperations}
          keyExpr={"operationId"}
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

          <Column dataField={"operationId"} />
          <Column dataField={"operationNo"} />
          <Column dataField={"operationSequence"} />
          <Column dataField={"operationDescription"} />
          <Column dataField={"precedingOperationId"} />
          <Column dataField={"workCenterRuntimeFactor"} />
          <Column dataField={"workCenterRuntime"} />
          <Column dataField={"laborRuntimeFactor"} />
          <Column dataField={"laborRunTime"} />
          <Column dataField={"opStartDateTime"} dataType={"datetime"} />
          <Column dataField={"opFinishDateTime"} dataType={"datetime"} />
          <Column dataField={"quantity"} />
          <Column dataField={"workCenterType"} />
          <Column dataField={"workCenterNo"} />
          <Column dataField={"operationStatus"} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
