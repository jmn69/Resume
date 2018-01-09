import React from 'react';
import { shallow } from 'enzyme';

import Projets from 'client/components/pages/Projets.jsx';

describe('Projets', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(<Projets />);
      };
      expect(render).not.toThrow();
    });

  });

});

