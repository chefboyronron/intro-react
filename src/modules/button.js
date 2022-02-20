import React, { Component } from 'react';
// CSS module import
import color from './Color.module.css';
// Regular css import
import'./button.css';
// Bootstrap Import
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Btn extends Component {
    render() {
        return(
            <div className='wrapper'>
                <div className='button-container'>
                    <Button>Test Bootstrap Button</Button>
                    <input type="button" className={color.success} value="Error Button" />
                </div>
                <div className='form-container container'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Btn;