import { connect } from 'react-redux';
import { setPageInit } from '@/settings/action';
import Skills from './Skills';

const hardcodedSkillsData = [
  {
    id: 1,
    name: 'Front-end',
    masteryPercentage: 95,
    skills: [
      {
        id: 1,
        name: 'React.js',
        masteryPercentage: 95,
      },
      {
        id: 2,
        name: 'Typescript',
        masteryPercentage: 90,
      },
      {
        id: 3,
        name: 'Unit Test',
        masteryPercentage: 70,
      },
      {
        id: 4,
        name: 'Vue.js',
        masteryPercentage: 40,
      },
      {
        id: 5,
        name: 'Angular',
        masteryPercentage: 20,
      },
    ],
  },
  {
    id: 2,
    name: 'Back-end',
    masteryPercentage: 80,
    skills: [
      {
        id: 6,
        name: 'Node.js',
        masteryPercentage: 90,
      },
      {
        id: 7,
        name: 'API Rest',
        masteryPercentage: 90,
      },
      {
        id: 8,
        name: 'ASP.Net Core, MVC 4/5',
        masteryPercentage: 80,
      },
      {
        id: 9,
        name: 'Unit Test',
        masteryPercentage: 70,
      },
    ],
  },
  {
    id: 3,
    name: 'Mobile',
    masteryPercentage: 70,
    skills: [
      {
        id: 10,
        name: 'React native',
        masteryPercentage: 95,
      },
      {
        id: 11,
        name: 'Fastlane/Fabric',
        masteryPercentage: 70,
      },
      {
        id: 13,
        name: 'Android Natif',
        masteryPercentage: 70,
      },
      {
        id: 14,
        name: 'IOS',
        masteryPercentage: 40,
      },
    ],
  },
  {
    id: 4,
    name: 'DevOps',
    masteryPercentage: 40,
    skills: [
      {
        id: 15,
        name: 'Docker',
        masteryPercentage: 50,
      },
      {
        id: 16,
        name: 'Nginx',
        masteryPercentage: 50,
      },
      {
        id: 17,
        name: 'Heroku',
        masteryPercentage: 50,
      },
      {
        id: 18,
        name: 'AWS',
        masteryPercentage: 30,
      },
    ],
  },
  {
    id: 5,
    name: 'Build/Packaging',
    masteryPercentage: 70,
    skills: [
      {
        id: 19,
        name: 'Webpack',
        masteryPercentage: 80,
      },
      {
        id: 20,
        name: 'Yarn/Npm',
        masteryPercentage: 80,
      },
      {
        id: 21,
        name: 'MsBuild',
        masteryPercentage: 70,
      },
    ],
  },
  {
    id: 6,
    name: 'Bases de données',
    masteryPercentage: 60,
    skills: [
      {
        id: 22,
        name: 'SQL Server',
        masteryPercentage: 80,
      },
      {
        id: 23,
        name: 'MongoDb',
        masteryPercentage: 80,
      },
      {
        id: 24,
        name: 'Oracle',
        masteryPercentage: 20,
      },
      {
        id: 25,
        name: 'ElasticSearch',
        masteryPercentage: 20,
      },
    ],
  },
];

const mapStateToProps = (state: any, ownProps: any) => ({
  data: hardcodedSkillsData,
  hasInit: !!state.settings.pagesHasInit.find(
    (pageHasInit: string) => pageHasInit === 'Skills'
  ),
  ...ownProps,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPageInit: (page: string) => dispatch(setPageInit(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
