import React from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import styles from '../css/Signin.css';

import Switcher from './pages/Switcher';
import MenuBar from './MenuBar';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <Container style={{ paddingTop: '1rem' }} fluid>
          <Switcher />
        </Container>
      </div>
    );
  }
}