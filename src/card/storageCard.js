import React, { Component } from 'react';

class StorageCard extends Component {

  render() {
    const typeStorage = this.props.typeStorage;

    return (
      <div className={"card border-"+typeStorage.class+" text-dark"}>
        <div className={"card-header alert-"+typeStorage.class+" text-center pt-1 pb-0"}>
            <div className="row">
                <div className="col-sm-4 offset-sm-4">
                    <h4>
                        {typeStorage.label}
                    </h4>
                </div>
            </div>
        </div>
        <div className="card-body pt-0">
                <div className="mt-3">
                    <h5 className="card-title">Add a new storage</h5>
                    <p className="card-text">Now you dont have storage add one for can add product in it</p>
                    <a href="/storage/add/2" className={"btn btn-"+typeStorage.class+" btn-block btn-sm"}>Add a Storage</a>
                </div>
        </div>
    </div>
    );
  }
}

export default StorageCard;
