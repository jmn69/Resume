import { connect } from 'react-redux';
import TopMenuComponent from './TopMenuComponent';

const mapStateToProps = state => ({
  path: state.location.pathname,
});

export default connect(mapStateToProps)(TopMenuComponent);
