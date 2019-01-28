import React, { Component } from 'react';
import TypeStorageTable  from './../table/typeStorageTable';

class TypeStorageTemplate extends Component {

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
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
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

    if (error) {
      return <div className="type-storage">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="type-storage">Loading...</div>;
    } else {
      return (
        <div className="type-storage">
        <h1> Type Storage </h1>
        {/* <SearchBar /> */}
        <TypeStorageTable typeStorages={items} />
        </div>
      );
    }
  }
}

export default TypeStorageTemplate;
