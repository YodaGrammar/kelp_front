import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import PackagingRow from '../../row/packagingRow';

it('renders without crashing', () => {

  const packaging = {id:1, label:'label'};

  const wrapper = shallow(<PackagingRow packaging={packaging}/>);

  const label = <td>label</td>;

  const link =  <Link className="btn btn-secondary btn-sm" to="/type_storage/edit/1">
                  <FontAwesomeIcon icon="pencil-alt" />
                </Link>;

  const button =  <button type="button" className="btn-delete btn btn-danger btn-sm" data-url="/type_storage/delete/1">
                    <FontAwesomeIcon icon="trash-alt" />
                  </button>;

  expect(wrapper.contains(label)).toEqual(true);
  expect(wrapper.contains(link)).toEqual(true);
  expect(wrapper.contains(button)).toEqual(true);

});
