import { connect } from 'react-redux';
import { setPageInit } from '@/settings/action';
import Clients from './Clients';

const hardcodedClientsData = [
  {
    id: 1,
    name: 'Mansa',
    image: 'mansa.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 2,
    name: 'Energy Go',
    image: 'simu-helper.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 3,
    name: 'MRS',
    image: 'mrs.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 4,
    name: 'Veesual',
    image: 'veesual.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 5,
    name: 'Pialab',
    image: null,
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 6,
    name: 'Qrock.me',
    image: null,
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 7,
    name: 'Kicklox',
    image: 'kicklox.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 8,
    name: 'Realytics',
    image: 'realytics.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Ts'],
  },
  {
    id: 9,
    name: 'Loyalty company',
    image: 'loyalty.webp',
    technos: ['React', 'Redux', 'Git', 'Js'],
  },
  {
    id: 10,
    name: 'Cowork.io',
    image: 'coworkio.webp',
    technos: ['React', 'Redux', 'Git', 'Js', 'Bootstrap', 'Android'],
    width: 'auto',
  },
  {
    id: 11,
    name: 'Arcan UP',
    image: null,
    technos: ['React', 'Redux', 'Ts', 'Bootstrap', 'Dotnet', 'Nodejs'],
  },
  {
    id: 12,
    name: 'Apps panel',
    image: null,
    technos: ['Android'],
  },
  {
    id: 13,
    name: 'GFI Informatique',
    image: null,
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
