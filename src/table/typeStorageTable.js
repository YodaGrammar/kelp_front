import React, { Component } from 'react';
import TypeStorageRow from '../row/typeStorageRow';

class TypeStorageTable extends Component {
  render() {
    const rows = [];

    this.props.typeStorages.forEach((typeStorage) => {
      rows.push(
        <TypeStorageRow
          typeStorage={typeStorage}
          key={typeStorage.label} />
      );
    });

    return (
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">Nom</th>
            <th className="text-center">Classe</th>
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

export default TypeStorageTable;
