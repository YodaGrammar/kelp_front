import React, { Component } from 'react';

class StorageModal extends Component {
  render() {

    const typeStorages = this.props.typeStorages;

    const rows = [];

    typeStorages.forEach((typeStorage) => {
      rows.push(
        <option id="{typeStorage.id}">{typeStorage.label}</option>
      );
    });


    return (
      <div id="storageModal" className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a storage</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">label</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="label" />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">type Storage</label>
                  <select class="form-control">
                    {rows}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StorageModal;
