import React from 'react';
import { shallow } from 'enzyme';

import Contact from 'client/components/pages/Contact.jsx';

describe('Contact', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(<Contact />);
      };
      expect(render).not.toThrow();
    });

  });

});

