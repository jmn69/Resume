import { connect } from 'react-redux';
import HomeSectionComponent from './HomeSectionComponent';

const mapStateToProps = state => ({
  isFullPageReady: state.settings.isFullPageReady,
});

export default connect(mapStateToProps)(HomeSectionComponent);
