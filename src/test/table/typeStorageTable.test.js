import React from 'react';
import { shallow } from 'enzyme';
import TypeStorageTable from '../../table/typeStorageTable';

it('typeStorage table', () => {

    const typeStorages = [];

    const wrapper = shallow(<TypeStorageTable typeStorages={typeStorages}/>);

    const thead =   <thead className="thead-dark">
                        <tr>
                            <th className="text-center">Nom</th>
                            <th className="text-center">Classe</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>;

  expect(wrapper.contains(thead)).toEqual(true);

});
