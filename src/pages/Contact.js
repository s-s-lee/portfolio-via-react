import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    // setup of state variables for contact form
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        // need to add backend support here for a contact form that works
        <Container>            
        <Form className="p-5">
        <h2>Send Susan a message!</h2>
            <Form.Group className="mb-3" controlId="contact-name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact-email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email address" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="contact-msg">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Message to Susan" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit 🎉
            </Button>
        </Form>
        </Container>

        // <main className="container flex-row justify-center">
        //     <div className="card">
        //         <h2 className="card-header bg-dark text-light p-2">Contact Form</h2>
        //         <form class="justify-content-center" id="contact-form" onSubmit={handleFormSubmit}>
        //             <input
        //                 className="form-input"
        //                 placeholder="Your name"
        //                 name="name"
        //                 type="text"
        //                 value={formState.name}
        //                 onChange={handleChange}
        //             />
        //             <input
        //                 className="form-input"
        //                 placeholder="Your email"
        //                 name="email"
        //                 type="email"
        //                 value={formState.email}
        //                 onChange={handleChange}
        //             />
        //             <input
        //                 className="form-input"
        //                 placeholder="Your message"
        //                 name="message"
        //                 type="text"
        //                 value={formState.message}
        //                 onChange={handleChange}
        //             />
        //             <Button as="input" type="submit" value="Submit" />{' '}
        //         </form>
        //     </div>
        // </main>
    );
}

export default Contact;