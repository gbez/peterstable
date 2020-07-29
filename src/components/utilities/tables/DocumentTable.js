import React, { Component } from "react";
import DataRow from "./DocumentTableDataRow";
import HeaderRow from "./DocumentTableHeaderRow";
import DocumentTablePagination, { paginate } from "./DocumentTablePagination";

class DocumentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    let data = this.props.data;
    let fields = this.props.fields;
    return (
      <div className="documentTable">
        {this.state.page}
        <table>
          <thead>
            <HeaderRow fields={fields} />
          </thead>
          <tbody>
            {paginate(data, this.state.page, 3).map((data) => (
              <DataRow key={data._id} data={data} fields={fields} />
            ))}
          </tbody>
        </table>
        <DocumentTablePagination
          data={data}
          page={this.state.page}
          perPage={this.state.perPage}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default DocumentTable;
