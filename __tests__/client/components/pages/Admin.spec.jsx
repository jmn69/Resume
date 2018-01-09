import React from 'react';
import { shallow } from 'enzyme';

import Admin from 'client/components/pages/ContAdminact.jsx';

describe('Admin', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(<Admin />);
      };
      expect(render).not.toThrow();
    });

  });

});

