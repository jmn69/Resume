import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default class Projets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Row>
                <Col xs="12" sm="12" md="12">
                    Projets
                </Col>
            </Row>
        );
    }
}