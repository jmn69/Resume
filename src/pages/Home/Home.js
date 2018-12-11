import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import HomeIntl from './Home.i';

import { changeLocale } from '../../locale/action';

const Home = () => (
  <div>
    <FormattedMessage {...HomeIntl.Home} />
  </div>
);

const mapStateToProps = state => ({
  locale: state.locale.locale,
});

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(changeLocale(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
