import React, { Component } from 'react';
import PackagingRow from '../row/packagingRow';

class PackagingTable extends Component {
  render() {
    const rows = [];

    this.props.packagings.forEach((packaging) => {
      rows.push(
        <PackagingRow
          packaging={packaging}
          key={packaging.label} />
      );
    });

    return (
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">Conditionnement</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    );
  }
}

export default PackagingTable;
