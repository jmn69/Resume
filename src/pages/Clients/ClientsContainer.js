import { connect } from 'react-redux';
import ClientsComponent from './ClientsComponent';
import { setPageInit } from '../../settings/action';

const hardcodedClientsData = [
  {
    id: 1,
    name: 'Realytics',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
  {
    id: 2,
    name: 'Loyalty company',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
  {
    id: 3,
    name: 'Cowork.io',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
  {
    id: 4,
    name: 'Arcan UP',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
  {
    id: 5,
    name: 'Apps panel',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
  {
    id: 6,
    name: 'GFI Informatique',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
  {
    id: 7,
    name: 'Finder pompes',
    image: 'urlPortolio',
    logo: 'urlLogoRealytics',
    technos: ['urlReactLogo', 'urlNodeLogo'],
  },
];

const mapStateToProps = (state, ownProps) => ({
  data: hardcodedClientsData,
  hasInit: !!state.settings.pagesHasInit.find(
    pageHasInit => pageHasInit === 'Clients',
  ),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  setPageInit: page => dispatch(setPageInit(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsComponent);
