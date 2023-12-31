import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const data = [
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
  {
    name: "Tanner Linsley",
    age: 26,
    friendName: "Jason Maurer",
    friendage: 23,    
  },
];

const columnData = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Age",
    accessor: "age",
  },
  {
    header: "Friend Name",
    accessor: "friendName",
  },
  {
    header: "Friend Age",
    accessor: "friendage",
  },
];

export default class ReactTableCom extends React.Component {
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
      columnData: [],
      totalElements: 10,
      pages: 1,
      filtered: this.props.filtered,
      eventServiceURL: this.props.eventServiceURL,
      loading: false,
      flag: this.props.flag,
      isAdminUser: false,
    };
  }

  fetchData = (state) => {
    this.setState({ loading: true });
    this.getRefData(
      state.page,
      state.pageSize,
      state.sorted,
      this.state.filtered,
      (res) => {
        this.setState({
          tableData: res.data.refDataObjList,
          // columnData: res.data.metaDataObjList,
          columnData:columnData,
          pages: res.data.totalPages,
          totalElements: res.data.totalElements,
          loading: false,
        });
      }
    );
  };
  getRefData(page, pageSize, sorted, filtered, handleRetrievedData) {
    let url = this.state.eventServiceURL;
    let postObject = {
      pageNumber: page,
      numberOfEntries: pageSize,
      sorted: sorted,
      filtered: filtered,
    };
    this.setState({ loading: false });
  }

  render() {
    return (
      <div class="react-dashboard-table-dynamic">
        <h4 style={{ "text-align": "left", "margin-top": "0px" }}>
          ReactTableCom
        </h4>
        <div>
          <ReactTable
            data={data}
            // totalRecords={this.state.totalElements}
            defaultPageSize={10}
            // loading={this.state.loading}
            loadingText=""
            pages={this.state.pages}
            showPagination={true}
            showPaginationTop={false}
            showPaginationBottom={true}
            noDataText="No data found"
            pageSizeOptions={[5, 10, 20, 25, 50, 100]}
            // filterable
            manual // this would indicate that server side pagination has been enabled
            minRows={3}
            onFilteredChange={(filtered) =>
              this.setState({ filterResult: filtered })
            }
            resizable={true}
            onFetchData={(state) => this.fetchData(state)}
            ref={(instance) => {
              this.table = instance;
            }}
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value
            }
            getTheadFilterThProps={() => {
              return {
                style: {
                  position: "inherit",
                  overflow: "inherit",
                },
              };
            }}
            // getHeaderProps ={()=>{
            //     console.log()
            // }}
            filterable={false}
            columns={columnData}
            export={true}
          >
            {(state, makeTable) => {
              let recordsInfoText = "";
              var actualTotalRecords = this.state.totalElements;
              const { pageRows, pageSize, page } = state;
              if (actualTotalRecords > 0) {
                let recordsCountFrom = page * pageSize + 1;
                let recordsCountTo = recordsCountFrom + pageRows.length - 1;
                recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${actualTotalRecords} records`;
              } else recordsInfoText = "No records";
              return (
                <div className="main-grid">
                  <div className="above-table text-right">
                    <div className="col-sm-12">
                      <span className="records-info">{recordsInfoText}</span>
                    </div>
                  </div>
                  {makeTable()}
                </div>
              );
            }}
          </ReactTable>
        </div>
      </div>
    );
  }
}
