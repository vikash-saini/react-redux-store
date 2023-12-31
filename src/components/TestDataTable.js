import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { columnData,tableData,customStyles } from "../extra/demoData";
import Export from "react-data-table-component"
import { Checkbox } from "react-inputs-validation";

export default class TestDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: [],
          id: [],
          checkTotalElement: "",
          SearchData: this.props.SearchData,
          applicationName: this.props.applicationName,
          eventGrpName: this.props.eventGrpName,
          eventVersion: this.props.eventVersion,
          serviceName: this.props.serviceName,
          eventServiceURL: "",
          getCheck: {
            active: "",
          },
          ArrayOfCheckbox: [],
          selectedValues: [],
          ArrayOfID: [],
          logoutSpinner: false,
          tableData: this.props.tableData,
          columnData: columnData,
          totalElements: this.props.totalElements,
          pages: this.props.pages,
          filtered: this.props.filtered,
          eventServiceURL: this.props.eventServiceURL,
          loading: false,
          flag: this.props.flag,
          isAdminUser: true,
        };
        this.downloadCSV = this.downloadCSV.bind(this);
        this.handleRowSelect = this.handleRowSelect(this);
       
      }

    convertArrayOfObjectsToCSV(array) {
        let result;
    
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(tableData[0]);
    
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
    
        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;
    
                result += item[key];
                // eslint-disable-next-line no-plusplus
                ctr++;
            });
            result += lineDelimiter;
        });
    
        return result;
    }

    downloadCSV(array) {
        const link = document.createElement('a');
        let csv = this.convertArrayOfObjectsToCSV(array);
        if (csv == null) return;
    
        const filename = 'export.csv';
    
        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
    
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    componentDidMount() {
        this.getUserRole();
    }

    getUserRole = () => {
        let { isAdminUser } = this.state;       
        this.setState({ isAdminUser }, () => {
        //   this.manipulateColumn();
        });
      };
      
    manipulateColumn() {
        let { columnData, isAdminUser } = this.state;
        let initial = {
            name: "",
            selector: "checkBox",          
          width: 50,
          cell: (props) => {
            let boolean = false;
            return (
              <>
                <Checkbox
                  checked={boolean}
                  onChange={(value) => {
                    let { ArrayOfCheckbox } = this.state;
                    let { selectedValues } = this.state;
                    if (!selectedValues[props.index]) {
                      selectedValues[props.index] = {
                        value: value,
                        item: props.original,
                      };
                    } else {
                      selectedValues[props.index].value = value;
                    }
                    ArrayOfCheckbox.push(props.original);
                    this.setState({ selectedValues });
                    this.setState({ ArrayOfCheckbox });
                    console.log(ArrayOfCheckbox);
                    console.log(boolean);
                  }}
                  validationOption={{
                    required: false,
                  }}
                />
              </>
            );
          },
        };
        columnData = this.props.columnData;
        if (isAdminUser) {
          columnData.unshift(initial);
          this.setState({ columnData });
        }
        this.setState({ columnData });
      }

      handleRowSelect({ selectedRows }){
        console.log('Selected Rows: ', selectedRows);

        // this.setState({...this.state,selectedValues:selectedRows})
      }

  render() {
    console.log(this.state);
    const disableExport =
      this.state.selectedValues.length == 0 ||
      this.state.selectedValues.every((val) => !val.value);

    return (
        <>
        <div>TestDataTable</div>
        <div class="react-dashboard-table-dynamic">
          <h4 style={{ "text-align": "left", "margin-top": "0px" }}>Result</h4>
          <div></div>
            {/* <button onClick={() => this.downloadCSV(tabledata)} >Export</button> */}
            <div className={""}>
              <a
                className="dare-export-btn"
                onClick={() => {
                    this.downloadCSV(tableData)
                }}
              >
                Export Table
              </a>
            </div>
            {/* <div className={disableExport ? "export-disable-link" : ""}>
              <a
                className="dare-export-btn"
                onClick={() => {
                    this.downloadCSV(tabledata)
                }}
              >
                Export
              </a>
            </div> */}
            <DataTable
                columns={this.state.columnData}
                data={this.state.tableData}
                pagination
                selectableRows
                onSelectedRowsChange={this.handleRowSelect}
                customStyles={customStyles}
                // actions={this.actionsMemo}
            />
        </div>
        </>
      
    )
  }
}
