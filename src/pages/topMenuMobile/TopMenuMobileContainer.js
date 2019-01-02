import { connect } from 'react-redux';
import TopMenuMobileComponent from './TopMenuMobileComponent';

const mapStateToProps = state => ({
  path: state.location.pathname,
});

export default connect(mapStateToProps)(TopMenuMobileComponent);
