import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default class Experiences extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Row>
                <Col xs="12" sm="12" md="12">
                    Experiences
                </Col>
            </Row>
        );
    }
}