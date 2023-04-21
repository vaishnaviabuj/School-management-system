import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Login(){

    return(
        <div  className="style">
        <Form >
            <div className="style1">
      <Form.Group controlId="formBasicEmail">
        <div >
        <Form.Control className="style2" type="email" placeholder="Enter email" />
        </div>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Control className="style2" type="password" placeholder="Password" />
      </Form.Group>
     
        <Form.Check type="checkbox" label="Check me out" />
      <Button fullwidth variant="primary" type="submit">
        Submit
      </Button>
      </div>
      </Form>
    </div>
    );
}