class TypeStorage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [
        {
          "id": 0,
          "label": "string",
          "comment": "string",
          "class": "string",
          "active": true
        }
      ]
    }
  }

  render () {
    // const { error, isLoaded, items } = this.state;
    //
    //   if(items !== null) {}
    //
    //     {items.map(item => (
    //       <tr key={item.id}>
    //         <td>{item.label}<td><td> {item.typeStorage}<td>
    //       </tr>
    //     )}
    //   }
    return (
      <div className="typeStorage">
      <h1> Type Storage </h1>
      <table>
        <tr>
          <th>label</th>
          <th>label</th>
        </tr>
        <tr>
          <td colSpan='2'>no data</td>
        </tr>
      </table>
      </div>
    );
  }
}

export default TypeStorage;
