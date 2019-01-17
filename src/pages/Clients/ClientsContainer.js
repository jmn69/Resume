import { connect } from 'react-redux';
import ClientsComponent from './ClientsComponent';
import { setPageInit } from '../../settings/action';

const hardcodedClientsData = [
  {
    id: 1,
    name: 'Realytics',
    image: 'http://localhost:3000/realytics-image',
    logo: 'urlLogoRealytics',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 2,
    name: 'Loyalty company',
    image: './loyalty-image',
    logo: 'urlLogoRealytics',
    technos: ['React', 'Redux', 'Git', 'Js'],
  },
  {
    id: 3,
    name: 'Cowork.io',
    image: './coworkio-image',
    logo: 'urlLogoRealytics',
    technos: ['React', 'Redux', 'Git', 'Js', 'Bootstrap', 'Android'],
    width: 'auto',
  },
  {
    id: 4,
    name: 'Arcan UP',
    image: null,
    logo: 'urlLogoRealytics',
    technos: ['React', 'Redux', 'Ts', 'Bootstrap', 'Dotnet', 'Nodejs'],
  },
  {
    id: 5,
    name: 'Apps panel',
    image: null,
    logo: 'urlLogoRealytics',
    technos: ['Android'],
  },
  {
    id: 6,
    name: 'GFI Informatique',
    image: null,
    logo: 'urlLogoRealytics',
    technos: ['Dotnet', 'Js', 'Bootstrap'],
  },
  {
    id: 7,
    name: 'Finder pompes',
    image: null,
    logo: 'urlLogoRealytics',
    technos: ['Dotnet', 'Js', 'Bootstrap'],
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
