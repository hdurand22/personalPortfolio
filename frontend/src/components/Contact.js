import React, { useState, useEffect, useRef, useContext } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import axios from 'axios';
import { Row, Col, FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import Phone from '../assets/telephone.jpg';
import { ScreenSizeContext } from '../App';

const Contact = ({ parallax }) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(parallax);

    console.log(ref);
    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        subject: 'Contact from personal website',
        message: ''
    });
    const [status, setStatus] = useState('Submit');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => {
            return {
                ...prev,
                [name]: value 
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message, subject } = inputs;
        setStatus('Sending...');


        axios.post('/sendtome', {
            name,
            email,
            subject,
            text: message
        }).then(setStatus('Submit')).then(setInputs({
            email: '',
            name: '',
            message: ''
        }));
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
            {isTabletOrMobile ?
                <>
                    <ParallaxLayer className='layer' offset={1} speed={0.8}>
                        <div className='section-header' id='contact'>
                            <h1>Contact</h1>
                            <Breadcrumbs parallax={ref} />   
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer className='layer' offset={1.4} speed={0.7}>
                        <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
                            <Col xxl={4} xl={4} lg={4} md={5} sm={7} xs={7} className='section-image'>
                                <img src={Phone} fluid='true' alt='Old Phone Vectors by Vecteezy' />
                            </Col>
                            <Col xxl={6} xl={6} lg={7} md={11} sm={11} xs={10} className='section-text'>
                                <Form id='email-form' onSubmit={handleSubmit}>
                                    <h3>Get in touch with me!</h3>
                                    <FormGroup className='mb-3' controlId='contactName'>
                                        <Form.Label>Name</Form.Label>
                                        <FormControl type='text' name='name' placeholder='Enter your full name' value={inputs.name} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='contactEmail'>
                                        <Form.Label>Email</Form.Label>
                                        <FormControl type='email' name='email' placeholder='Enter your email address' value={inputs.email} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='contactMessage'>
                                        <Form.Label>Message</Form.Label>
                                        <FormControl as='textarea' name='message' rows={4} value={inputs.message} onChange={handleChange}/>
                                    </FormGroup>
                                    <Button type='submit'>{status}</Button>
                                </Form>
                            </Col>
                        </Row>
                    </ParallaxLayer>
                </>
            :
            <>
                <div className='section-header' id='contact'>
                    <h1 onMouseEnter={() => setIsShown(true)}>Contact</h1>
                    {isShown &&
                        <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
                    }
                </div>
                <ParallaxLayer id='contact-layer' offset={1.8} speed={0.8}>
                    <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
                        <Col xxl={4} xl={4} lg={4} md={5} sm={7} xs={7} className='section-image'>
                            <img src={Phone} fluid='true' alt='Old Phone Vectors by Vecteezy' />
                        </Col>
                        <Col xxl={6} xl={6} lg={7} md={11} sm={11} xs={10} className='section-text'>
                            <Form id='email-form' onSubmit={handleSubmit}>
                                <h3>Get in touch with me!</h3>
                                <FormGroup className='mb-3' controlId='contactName'>
                                    <Form.Label>Name</Form.Label>
                                    <FormControl type='text' name='name' placeholder='Enter your full name' value={inputs.name} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className='mb-3' controlId='contactEmail'>
                                    <Form.Label>Email</Form.Label>
                                    <FormControl type='email' name='email' placeholder='Enter your email address' value={inputs.email} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className='mb-3' controlId='contactMessage'>
                                    <Form.Label>Message</Form.Label>
                                    <FormControl as='textarea' name='message' rows={4} value={inputs.message} onChange={handleChange}/>
                                </FormGroup>
                                <Button type='submit'>{status}</Button>
                            </Form>
                        </Col>
                    </Row>
                </ParallaxLayer>
            </>
            }
        </>

    )
};

export default Contact;
