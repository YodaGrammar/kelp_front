import React, { Component } from 'react';
import StorageCard from '../card/storageCard';
import StorageModal from '../modal/storageModal';

class StorageTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
  }
  componentDidMount() {
    fetch("http://kelp-dev.fr:8003/api/type_storages")
    .then(res => res.json())
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          items: response['hydra:member']
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const rows = [];

    items.forEach((typeStorage) => {
      rows.push(
        <div className="col-sm-4 mb-3">
          <StorageCard
            typeStorage={typeStorage}
            key={typeStorage.label} />
            </div>
      );
    });

    if (error) {
      return <div className="type-storage">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="type-storage">Loading...</div>;
    } else {
      return (
        <div className="storage mt-3">
          <h1> Storage

          <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#storageModal">
              Add a storage
          </button>
          </h1>



          <div className="row">
            {rows}
          </div>
          <StorageModal typeStorages={items} key={items.label}/>
        </div>
      );
    }


  }
}

export default StorageTemplate;
