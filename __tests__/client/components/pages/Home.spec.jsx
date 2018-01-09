import React from 'react';
import { shallow } from 'enzyme';

import Home from 'client/components/pages/Home.jsx';

describe('Home', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(<Home />);
      };
      expect(render).not.toThrow();
    });

  });

});

