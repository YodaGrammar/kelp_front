import React, { Component } from 'react';
import PackagingTable  from './../table/packagingTable';

class PackagingTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
  }

  componentDidMount() {
    fetch("http://kelp-dev.fr:8003/api/packagings")
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
      return <div className="packaging">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="packaging">Loading...</div>;
    } else {
      return (
        <div className="packaging">
        <h1> Conditionnement </h1>
        {/* <SearchBar /> */}
        <PackagingTable packagings={items} />
        </div>
      );
    }
  }
}

export default PackagingTemplate;
