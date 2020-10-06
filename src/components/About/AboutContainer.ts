import { connect } from 'react-redux';
import { setPageInit } from '@/settings/action';
import About from './About';

const mapStateToProps = (state: any, ownProps: any) => ({
  hasInit: !!state.settings.pagesHasInit.find(
    (pageHasInit: string) => pageHasInit === 'About'
  ),
  ...ownProps,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPageInit: (page: string) => dispatch(setPageInit(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
