import { connect } from 'react-redux';
import { setPageInit } from '@/settings/action';
import Clients from './Clients';

const hardcodedClientsData = [
  {
    id: 1,
    name: 'Realytics',
    image: './realytics-image',
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

const mapStateToProps = (state: any, ownProps: any) => ({
  data: hardcodedClientsData,
  hasInit: !!state.settings.pagesHasInit.find(
    (pageHasInit: string) => pageHasInit === 'Clients'
  ),
  ...ownProps,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPageInit: (page: string) => dispatch(setPageInit(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);