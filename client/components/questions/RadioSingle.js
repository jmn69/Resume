import React from 'react';
import T from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import FormText from 'reactstrap/lib/FormText';
import FormGroup from 'reactstrap/lib/FormGroup';
import Form from 'reactstrap/lib/Form';

export default class RadioSingle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            // <div>
            //     <label class="custom-control custom-radio">
            //         <input id="radio1" name="radio" type="radio" class="custom-control-input">
            //             <span class="custom-control-indicator"></span>
            //             <span class="custom-control-description">Toggle this custom radio</span>
            //     </label>
            //     <label class="custom-control custom-radio">
            //             <input id="radio2" name="radio" type="radio" class="custom-control-input">
            //                 <span class="custom-control-indicator"></span>
            //                 <span class="custom-control-description">Or toggle this other custom radio</span>
            //     </label>
            // </div>
            <Form>
                <FormGroup tag="fieldset" row>
                    <legend className="col-form-legend col-sm-2">Radio Buttons</legend>
                    <Col sm={10}>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio2" disabled />{' '}
                                Option three is disabled
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
