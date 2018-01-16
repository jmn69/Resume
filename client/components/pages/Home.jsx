import React from 'react';
import Alert from 'reactstrap/lib/Alert';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import styles from '../../css/Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Row className={styles.presentation} >
                    <Col className="d-flex justify-content-center align-items-center" md={12}>
                        <div >
                            <span className={styles.title}>Jordane Michon</span>
                            <br />
                            <span className={styles.subTitle}>Développeur FullStack JavaScript / .Net</span>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row style={{ marginTop: '80px', marginBottom: '150px' }}>
                    <Col md={8}>
                        <Row className={styles.aboutme}>
                            <Col mdOffset={1} md={3}>
                                <Row>
                                    <Col>
                                        avatar
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col className={styles.status}>
                                        <div className={styles.advanced}></div>
                                        <span>Disponible pour des projets freelance</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={8}>
                                <div className={styles.panel}>
                                    <p>
                                        Passionné par les nouvelles technologies depuis l'enfance et guidé naturellement par ma curiosité, je suis monté en compétences sur divers secteurs.
                                        Toutes ces experiences m'ont forgées un profil atypique
                                    <br /><br />
                                        Développeur fullstack, entrepreneur, administrateur système, agent support, militaire, électricien.. autant de métiers et de vocations, 
                                        à l'experience radicalement opposée parfois, qui font aujourd'hui ma force dans mon approche professionnelle.</p>
                                    <br />
                                        Je suis toujours à la recherche de nouveaux défis. J'aime être au coeur de l'innovation et de la conception. 
                                        C'est pourquoi j'emploi aujourd'hui mes compétences en tant que freelance afin d'élargir toujours plus mon horizon et mes connaissances sur divers produits.
                                    <br /><br />
                                        J'oriente depuis quelques années mes compétences de développeur vers une stack full Js, 
                                        convaincu que cela apporte le meilleurs compromis productivité/fun/efficacité du moment.
                                    <br />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="secondPartHome" style={{ backgroundColor: '#444444', height: '150px' }}>
                    <Col md={12}>
                        <span style={{ color: 'white' }}>Copyright 2017 - Tous droits réservés</span>
                    </Col>
                </Row>
                {/* <div style={this.state.expanded ? styles.goUp : styles.goDown}>
                    <IconButton id="expandHome" onClick={this.handleExpand} style={{ borderRadius: '50%', border: 'solid 1px #979797'}}>
                        {this.state.expanded ? <NavigationExpandLess color="#979797" /> : <NavigationExpandMore color="#979797" />}
                    </IconButton>
                </div> */}
            </div>);
    }
}