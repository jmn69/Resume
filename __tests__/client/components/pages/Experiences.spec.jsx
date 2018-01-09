import React from 'react';
import { shallow } from 'enzyme';

import SurveyConnected, { Experiences, mapStateToProps, mapDispatchToProps } from 'client/components/pages/Experiences.jsx';

describe('Experiences', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(<Experiences />);
      };
      expect(render).not.toThrow();
    });

  });

});

