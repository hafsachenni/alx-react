import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );


    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBe(1);

    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.children().equals(<p>test children node</p>)).toBe(true);

    expect(wrapper.find('.bodySectionWithMargin').length).toBe(1);
  });
});
