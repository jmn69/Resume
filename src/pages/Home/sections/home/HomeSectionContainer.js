import { connect } from 'react-redux';
import HomeSectionComponent from './HomeSectionComponent';

const mapStateToProps = (state, ownProps) => ({
  isFullPageReady: state.settings.isFullPageReady,
  ...ownProps,
});

export default connect(mapStateToProps)(HomeSectionComponent);
