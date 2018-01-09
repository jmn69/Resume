import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import API from 'client/api';
import NavLinkConnected, { NavLink, mapStateToProps, mapDispatchToProps } from 'client/components/NavLink.jsx';

const mockStore = configureStore([thunk]);

const prepare = (name, state) => {
  const store = mockStore(state);
  return {
    store,
    fn: (...args) => Promise.resolve(
      mapDispatchToProps(store.dispatch)[name](...args)
    )
  };
};

describe('NavLink', () => {

  describe('UI', () => {

    it('should render', () => {
      const render = () => {
        shallow(
          <NavLink
            pagePath='/'
            pageType='HOME'
            label='Home'
          />
        );
      };
      expect(render).not.toThrow();
    });

    it('should dispatch goToPage on NavLink click', () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <NavLink
          pagePath='/'
          pageType='HOME'
          label='Home'
        />
      );
      wrapper.setProps({
        goToPage: spy
      });
      wrapper.instance().handleNavClick();
      expect(spy).toHaveBeenCalledWith('HOME');
    });

  });

  describe('SignIn container', () => {
    it("mapStateToProps", function () {
      const state = {
        location: {
          pathname: "/"
        }
      };

      expect(mapStateToProps(state)).toEqual({
        path: "/"
      });
    });

    describe("mapDispatchToProps", function () {

      it("goToPage", function () {

        const { store, fn } = prepare("goToPage", {});
        fn('HOME').then(() => {
          expect(store.getActions().map(a => a.type)).toEqual([
            "HOME"
          ]);
        });
      });

    });

  });

});

