import { connect } from 'react-redux';
import TopMenuComponent from './TopMenuComponent';

const mapStateToProps = state => ({
  currentPageIndex: state.home.currentPageIndex,
});

export default connect(mapStateToProps)(TopMenuComponent);
