import { connect } from 'react-redux';
import AboutComponent from './AboutComponent';
import { setPageInit } from '../../settings/action';

const mapStateToProps = (state, ownProps) => ({
  hasInit: !!state.settings.pagesHasInit.find(
    pageHasInit => pageHasInit === 'About',
  ),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  setPageInit: page => dispatch(setPageInit(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutComponent);
