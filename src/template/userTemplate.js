import React, { Component } from 'react';
import UserTable  from './../table/userTable';

class UserTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
  }

  componentDidMount() {
    fetch("http://kelp-dev.fr:8003/api/users")
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

    if (error) {
      return <div className="user">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="user">Loading...</div>;
    } else {
      return (
        <div className="user">
        <h1> User </h1>
        {/* <SearchBar /> */}
        <UserTable users={items} />
        </div>
      );
    }
  }
}

export default UserTemplate;
