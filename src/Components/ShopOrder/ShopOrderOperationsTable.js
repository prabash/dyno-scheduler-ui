import React from 'react';
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';

import { employees, states } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
  
  render() {
    return (
      <React.Fragment>
        <DataGrid
          id={'gridContainer'}
          dataSource={employees}
          keyExpr={'ID'}
          allowColumnReordering={true}
          showBorders={true}
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}>

          <Paging enabled={true} />
          <Editing
            mode={'row'}
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true} />

          <Column dataField={'Prefix'} caption={'Title'} />
          <Column dataField={'FirstName'} />
          <Column dataField={'LastName'} />
          <Column dataField={'Position'} width={130} />
          <Column
            dataField={'StateID'}
            caption={'State'}
            width={125}
          >
            <Lookup dataSource={states} displayExpr={'Name'} valueExpr={'ID'} />
          </Column>
          <Column
            dataField={'BirthDate'}
            width={125}
            dataType={'date'} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
