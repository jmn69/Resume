import { connect } from 'react-redux';
import { setPageInit } from '@/settings/action';
import Home from './Home';

const mapStateToProps = (state: any, ownProps: any) => ({
  hasInit: !!state.settings.pagesHasInit.find(
    (pageHasInit: string) => pageHasInit === 'Home'
  ),
  ...ownProps,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPageInit: (page: string) => dispatch(setPageInit(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
