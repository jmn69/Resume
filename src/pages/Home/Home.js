import React from 'react';
import { FormattedMessage } from 'react-intl';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import HomeIntl from './Home.i';

import { changeLocale } from '../../locale/action';

const Home = props => (
  <div>
    <FormattedMessage {...HomeIntl.Home} />
    <button
      onClick={() => {
        Cookies.set('language_pref', 'fr');
        props.changeLocale('fr');
      }}
    >
      test
    </button>
  </div>
);

const mapStateToProps = state => ({
  locale: state.locale.locale,
});

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(changeLocale(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
