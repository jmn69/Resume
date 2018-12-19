import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { setPageInit } from '../../settings/action';

const mapStateToProps = (state, ownProps) => ({
  hasInit: !!state.settings.pagesHasInit.find(
    pageHasInit => pageHasInit === 'Home',
  ),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  setPageInit: page => dispatch(setPageInit(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
