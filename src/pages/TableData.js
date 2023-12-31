import React, { Component } from 'react'
import TableDataTable from '../components/TestDataTable'
import { columnData,tableData } from "../extra/demoData";

export default class TableData extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
  render() {
    return (
        <>
        <div>TableData</div>
        <div>
            <TableDataTable
            SearchData={this.state.reqObj}
            tableData={tableData}
            columnData={columnData}
            totalElements={10}
            pages={2}
            // filtered={this.state.reqObj.filtered}
            eventServiceURL={this.state.eventServiceURL}
            applicationName={this.props.applicationName}
            eventGrpName={this.props.eventGrpName}
            eventVersion={this.props.eventVersion}
            serviceName={this.props.serviceName}
            />
        </div>
        </>
      
    )
  }
}
