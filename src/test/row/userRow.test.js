import React from 'react';
import { shallow } from 'enzyme';
import UserRow from '../../row/userRow';

it('renders without crashing', () => {

  const user = {
      id:1,
      fullName:'fullName',
      username:'username',
      email:'email',
      roles:'roles',
      active:'active',
    };

  const wrapper = shallow(<UserRow user={user}/>);

  const fullName = <td>fullName</td>;
  const username = <td>username</td>;
  const email = <td>email</td>;
  const roles = <td>roles</td>;
  const active = <td>active</td>;

  expect(wrapper.contains(fullName)).toEqual(true);
  expect(wrapper.contains(username)).toEqual(true);
  expect(wrapper.contains(email)).toEqual(true);
  expect(wrapper.contains(roles)).toEqual(true);
  expect(wrapper.contains(active)).toEqual(true);

});
