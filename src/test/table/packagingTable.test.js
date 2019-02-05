import React from 'react';
import { shallow } from 'enzyme';
import PackagingTable from '../../table/packagingTable';

it('packaging table', () => {

    const packagings = [];

    const wrapper = shallow(<PackagingTable packagings={packagings}/>);

    const thead = <thead className="thead-dark">
                    <tr>
                      <th className="text-center">Conditionnement</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>;

  expect(wrapper.contains(thead)).toEqual(true);

});
