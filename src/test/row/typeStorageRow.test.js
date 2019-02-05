import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import TypeStorageRow from '../../row/typeStorageRow';

it('renders without crashing', () => {

  const typeStorage = {id:1, label:'label', class:'color'};

  const wrapper = shallow(<TypeStorageRow typeStorage={typeStorage}/>);

  const label = <td>label</td>;
  
  const color = <td>color</td>;

  const link =  <Link className="btn btn-secondary btn-sm" to="/type_storage/edit/1">
                  <FontAwesomeIcon icon="pencil-alt" />
                </Link>;

  const button =  <button type="button" className="btn-delete btn btn-danger btn-sm" data-url="/type_storage/delete/1">
                    <FontAwesomeIcon icon="trash-alt" />
                  </button>;

  expect(wrapper.contains(label)).toEqual(true);
  expect(wrapper.contains(color)).toEqual(true);
  expect(wrapper.contains(link)).toEqual(true);
  expect(wrapper.contains(button)).toEqual(true);

});