import { ParallaxLayer } from '@react-spring/parallax';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import Phone from '../assets/telephone.jpg';

const Contact = ({ parallax }) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(parallax);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState('Submit');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        console.log(details);

        let res = await axios.post('http://localhost:5000/contact', {
            data: details
        }).then((res) => {
            if (res.data.status === 'Message sent') {
                alert(res.data.status);
            }
            else {
                alert(res.data.status);
            }

        })
        
        setStatus('Submit');
    }

    const resetForm = () => {
        
    }

    useEffect(() => {
        const mouseLeaveEvent = (e) => {
            e.preventDefault();
        }

        // If dropdown is open, listen for mouse hovering out of area
        if (isShown) {
            window.addEventListener('mouseover', mouseLeaveEvent);
        }

        return () => {
            window.removeEventListener('mouseover', mouseLeaveEvent);
        }
    }, [isShown]);

    return (
        <>
            <div className='section-header' id='contact'>
                <h1 onMouseEnter={() => setIsShown(true)}>Contact</h1>
                {isShown &&
                    <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
                }
            </div>
            <Container>
            <ParallaxLayer offset={1.8} speed={0.8}>
                <Row className='section-content'>
                    <Col>
                        <img src={Phone} fluid='true' className='section-image' alt='Old Phone Vectors by Vecteezy' />
                    </Col>
                    <Col className='section-text'>
                        <Form onSubmit={handleSubmit}>
                            <h3>Get in touch with me!</h3>
                            <FormGroup className='mb-3' controlId='contactName'>
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' placeholder='Enter your full name' value={name} onChange={(e) => setName(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='mb-3' controlId='contactEmail'>
                                <Form.Label>Email</Form.Label>
                                <FormControl type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='mb-3' controlId='contactMessage'>
                                <Form.Label>Message</Form.Label>
                                <FormControl as='textarea' rows={8} value={message} onChange={(e) => setMessage(e.target.value)}/>
                            </FormGroup>
                            <Button type='submit'>{status}</Button>
                        </Form>
                    </Col>
                </Row>
            </ParallaxLayer>
            </Container>
        </>

    )
};

export default Contact;
