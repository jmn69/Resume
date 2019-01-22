import { connect } from 'react-redux';
import LanguageSelectorComponent from './LanguageSelectorComponent';
import { changeLocale } from '../../../locale/action';

const mapStateToProps = state => ({
  locale: state.locale.locale,
});

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(changeLocale(locale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelectorComponent);
