import React, { Component } from 'react';
import UserRow from '../row/userRow';

class PackagingTable extends Component {
  render() {
    const rows = [];

    this.props.users.forEach((user) => {
      rows.push(
        <UserRow
          user={user}
          key={user.username} />
      );
    });

    return (
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">Nom</th>
            <th className="text-center">Username</th>
            <th className="text-center">Email</th>
            <th className="text-center">Roles</th>
            <th className="text-center">Statut</th>
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
