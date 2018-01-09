import React from 'react';
import { shallow } from 'enzyme';

import Skills from 'client/components/pages/Skills.jsx';

describe('Skills', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(<Skills />);
      };
      expect(render).not.toThrow();
    });

  });

});

