import { connect } from 'react-redux';
import SkillsComponent from './SkillsComponent';
import { setPageInit } from '../../settings/action';

const hardcodedSkillsData = [
  {
    id: 1,
    name: 'Front-end',
    masteryPercentage: 95,
    skills: [
      {
        name: 'React.js',
        masteryPercentage: 95,
      },
      {
        name: 'Typescript',
        masteryPercentage: 90,
      },
      {
        name: 'Unit Test',
        masteryPercentage: 70,
      },
      {
        name: 'Vue.js',
        masteryPercentage: 40,
      },
      {
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
        name: 'Node.js',
        masteryPercentage: 90,
      },
      {
        name: 'API Rest',
        masteryPercentage: 90,
      },
      {
        name: 'ASP.Net Core, MVC 4/5',
        masteryPercentage: 80,
      },
      {
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
        name: 'React native',
        masteryPercentage: 95,
      },
      {
        name: 'Fastlane/Fabric',
        masteryPercentage: 70,
      },
      {
        name: 'Android Natif',
        masteryPercentage: 70,
      },
      {
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
        name: 'Docker',
        masteryPercentage: 50,
      },
      {
        name: 'Nginx',
        masteryPercentage: 50,
      },
      {
        name: 'Heroku',
        masteryPercentage: 50,
      },
      {
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
        name: 'Webpack',
        masteryPercentage: 80,
      },
      {
        name: 'Yarn/Npm',
        masteryPercentage: 80,
      },
      {
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
        name: 'SQL Server',
        masteryPercentage: 80,
      },
      {
        name: 'MongoDb',
        masteryPercentage: 80,
      },
      {
        name: 'Oracle',
        masteryPercentage: 20,
      },
      {
        name: 'ElasticSearch',
        masteryPercentage: 20,
      },
    ],
  },
];

const mapStateToProps = (state, ownProps) => ({
  data: hardcodedSkillsData,
  hasInit: !!state.settings.pagesHasInit.find(
    pageHasInit => pageHasInit === 'Skills',
  ),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  setPageInit: page => dispatch(setPageInit(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SkillsComponent);
