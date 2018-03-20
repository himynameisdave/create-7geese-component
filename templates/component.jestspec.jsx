import React from 'react';
import { shallow } from 'enzyme';
import {pascal} from './{kebab}.jsx';


describe('{pascal}', () => {
    it('should match the jest snapshot', () => {
        const PROPS = {};
        const wrapper = shallow(<{pascal} {...PROPS} />);
        expect(wrapper).toMatchSnapshot();
    });
});
