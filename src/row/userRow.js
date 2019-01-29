import React, { Component } from 'react';

class UserRow extends Component {
  render() {
    const user = this.props.user;

    return (
      <tr>
        <td>{user.fullName}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.roles}</td>
        <td>{user.active}</td>
      </tr>
    );
  }
}

export default UserRow;
