import React from 'react';
import Alert from 'reactstrap/lib/Alert';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                Home
                <button type="button" className="btn btn-primary">Primary</button>
            </div>);
    }
}