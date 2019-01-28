import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TypeStorageRow extends Component {
  render() {
    const typeStorage = this.props.typeStorage;

    return (
      <tr>
        <td>{typeStorage.label}</td>
        <td>{typeStorage.class}</td>
        <td className="text-center">
        <div className="btn-group btn-group-sm" role="group">
          <Link className="btn btn-secondary btn-sm" to={"/type_storage/edit/"+typeStorage.id}><FontAwesomeIcon icon="pencil-alt" /></Link>
          <button type="button" className="btn-delete btn btn-danger btn-sm" data-url={"/type_storage/delete/"+typeStorage.id}><FontAwesomeIcon icon="trash-alt" /></button>
        </div>
        </td>
      </tr>
    );
  }
}

export default TypeStorageRow;
