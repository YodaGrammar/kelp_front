import React, { Component } from 'react';

class Storage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items:  [
        {
          "id": 0,
          "label": "string",
          "user": "string",
          "typeStorage": "string",
          "products": [
            "string"
          ],
          "active": true
        }
      ]
    }
  }

  // componentDidMount() {
  //   fetch("http://kelp-dev.fr:8003/api/storages")
  //         .then(res => res.json())
  //         .then(
  //           (result) => {
  //             this.setState({
  //               isLoaded: true,
  //               items: result.items
  //             });
  //           },
  //           // Note: it's important to handle errors here
  //           // instead of a catch() block so that we don't swallow
  //           // exceptions from actual bugs in components.
  //           (error) => {
  //             this.setState({
  //               isLoaded: true,
  //               error
  //             });
  //           }
  //         )
  //     }

  // render() {
  //     const { error, isLoaded, items } = this.state;
  //     if (error) {
  //       return <div>Error: {error.message}</div>;
  //     } else if (!isLoaded) {
  //       return <div>Loading...</div>;
  //     } else {
  //       return (
  //         <ul>
  //           {items.map(item => (
  //             <li key={item.name}>
  //               {item.name} {item.price}
  //             </li>
  //           ))}
  //         </ul>
  //       );
  //     }
  //   }
  render () {
    const { error, isLoaded, items } = this.state;
    return (
      <ul>
      {items.map(item => (
        <li key={item.label}>
        {item.label} {item.typeStorage}
        </li>
      ))}
      </ul>
    );
  }

}

export default Storage;
