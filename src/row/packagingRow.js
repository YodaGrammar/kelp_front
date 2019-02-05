import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PackagingRow extends Component {
  render() {
    const packaging = this.props.packaging;

    return (
      <tr>
        <td>{packaging.label}</td>
        <td className="text-center">
        <div className="btn-group btn-group-sm" role="group">
          <Link className="btn btn-secondary btn-sm" to={"/type_storage/edit/"+packaging.id}>
            <FontAwesomeIcon icon="pencil-alt" />
          </Link>
          <button type="button" className="btn-delete btn btn-danger btn-sm" data-url={"/type_storage/delete/"+packaging.id}>
            <FontAwesomeIcon icon="trash-alt" />
          </button>
        </div>
        </td>
      </tr>
    );
  }
}

export default PackagingRow;
