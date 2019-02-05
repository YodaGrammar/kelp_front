import React from 'react';
import { shallow } from 'enzyme';
import UserTable from '../../table/userTable';

it('renders without crashing', () => {

  const users = [];

    const wrapper = shallow(<UserTable users={users}/>);

    const thead =   <thead className="thead-dark">
                        <tr>
                            <th className="text-center">Nom</th>
                            <th className="text-center">Username</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Roles</th>
                            <th className="text-center">Statut</th>
                        </tr>
                    </thead>;

  expect(wrapper.contains(thead)).toEqual(true);

});
