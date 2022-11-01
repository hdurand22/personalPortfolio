import React, { useState, useEffect, useRef, useContext } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import axios from 'axios';
import { Row, Col, FormControl, FormGroup, Form } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import { ScreenSizeContext } from '../App';
import ContactIcon from './ContactIcon';

const Contact = ({ parallax }) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(parallax);
    const { isTabletOrMobile } = useContext(ScreenSizeContext);

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        subject: 'Contact from personal website',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const isValidName = (name) => {
        if (name.length < 2) {
            setNameError('Name must be at least 2 characters');
            return false;
        }
        else {
            setNameError(null);
            return true;
        }
    }

    const isValidEmail = (email) => {
        if (/\S+@\S+\.\S+/.test(email) === false) {
            setEmailError('Invalid email address');
            return false;
        }
        else {
            setEmailError(null);
            return true;
        }
    }

    const isValidMessage = (message) => {
        if (message.length < 1) {
            setMessageError('Message must be at least 1 character');
            return false;
        }
        else {
            setMessageError(null);
            return true;
        }
    }


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
        const emailCheck = isValidEmail(email);
        const nameCheck = isValidName(name);
        const messageCheck = isValidMessage(message);
        
        if (emailCheck && nameCheck && messageCheck) {
            setStatus('Sending...');
            axios.post('/sendtome', {
                name,
                email,
                subject,
                text: message
            }).then(setStatus('Submitted')).then(setInputs({
                email: '',
                name: '',
                message: ''
            })).catch((error) => {
                console.error(error);
                setErrorMessage("Sorry, something went wrong. Please try again later or email us at hayden@durandenterprises.com.")
            });
        }
        return;
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
                <ParallaxLayer className='layer' offset={3} speed={0.6} style={{ zIndex: 5, height: '4px' }}>
                    <div className='section-header' id='contact'>
                        <Breadcrumbs parallax={ref} />   
                        <h1 className='section-title'>Contact</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='layer' offset={3.2} speed={0.8}>
                    <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
                        <Col xxl={4} xl={4} lg={4} md={5} sm={7} xs={7} className='section-image'>
                            <ContactIcon height={200} />
                        </Col>
                        <Col xxl={6} xl={6} lg={7} md={11} sm={11} xs={10} className='section-text'>
                            {status === 'Submitted' && errorMessage === null ? 
                                <h2>Thanks for reaching out! We'll get back to you soon!</h2>
                                :
                                <Form id='email-form' onSubmit={handleSubmit}>
                                    <h3>Get in touch with me!</h3>
                                    <FormGroup className='mb-3' controlId='contactName'>
                                        <Form.Label>Name</Form.Label>
                                        <FormControl type='text' name='name' placeholder='Enter your name' value={inputs.name} onChange={handleChange} />
                                        {nameError && <p style={{color: 'red', fontSize: '10px'}}>{nameError}</p>}
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='contactEmail'>
                                        <Form.Label>Email</Form.Label>
                                        <FormControl type='email' name='email' placeholder='Enter your email address' value={inputs.email} onChange={handleChange} />
                                        {emailError && <p style={{color: 'red', fontSize: '10px'}}>{emailError}</p>}
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='contactMessage'>
                                        <Form.Label>Message</Form.Label>
                                        <FormControl as='textarea' name='message' rows={3} value={inputs.message} onChange={handleChange}/>
                                        {messageError && <p style={{color: 'red', fontSize: '10px'}}>{messageError}</p>}
                                    </FormGroup>
                                    <button type='submit' style={{backgroundColor: "#E47C5B", borderRadius: "10%", border: "1px solid"}}>Submit</button>
                                </Form>
                            }
                            {errorMessage !== null &&
                                <h2>{errorMessage}</h2>
                            }
                        </Col>
                    </Row>
                </ParallaxLayer>
            </>
            :
            <>
                <ParallaxLayer id='layer' offset={3} speed={0.6}>
                    <div className='section-header' id='contact'>
                        <h1 onMouseEnter={() => setIsShown(true)}>Contact</h1>
                        {isShown &&
                            <Breadcrumbs setIsShown={setIsShown} parallax={ref} />
                        }
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3.2} speed={0.8}>
                    <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} className='section-content'>
                        <Col xxl={4} xl={4} lg={4} md={5} sm={7} xs={7} className='section-image'>
                            <ContactIcon />
                        </Col>
                        <Col xxl={6} xl={6} lg={7} md={11} sm={11} xs={10} className='section-text'>
                            {status === 'Submitted' && errorMessage === null ? 
                                <h2>Thanks for reaching out! We'll get back to you soon!</h2>
                                :
                                <Form id='email-form' onSubmit={handleSubmit}>
                                    <h3>Get in touch with me!</h3>
                                    <FormGroup className='mb-3' controlId='contactName'>
                                        <Form.Label>Name</Form.Label>
                                        <FormControl type='text' name='name' placeholder='Enter your name' value={inputs.name} onChange={handleChange} />
                                        {nameError && <p style={{color: 'red'}}>{nameError}</p>}
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='contactEmail'>
                                        <Form.Label>Email</Form.Label>
                                        <FormControl type='email' name='email' placeholder='Enter your email address' value={inputs.email} onChange={handleChange} />
                                        {emailError && <p style={{color: 'red'}}>{emailError}</p>}
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='contactMessage'>
                                        <Form.Label>Message</Form.Label>
                                        <FormControl as='textarea' name='message' rows={4} value={inputs.message} onChange={handleChange}/>
                                        {messageError && <p style={{color: 'red'}}>{messageError}</p>}
                                    </FormGroup>
                                    <button type='submit' style={{backgroundColor: "#E47C5B", borderRadius: "10%", border: "1px solid"}}>Submit</button>
                                </Form>
                            }
                            {errorMessage !== null &&
                                <h2>{errorMessage}</h2>
                            }
                        </Col>
                    </Row>
                </ParallaxLayer>
            </>
            }
        </>

    )
};

export default Contact;
