import React, { useState } from 'react';
import axios from 'axios'; // For sending data to the backend
import '../styles/form/formPage.css'; // Create a CSS file for custom styling
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

import HeaderNavbar from '../components/HeaderNavBar';
import Footer from '../components/Footer';
import OpeningHoursSelect from '../components/form/OpeningHoursSelect';
import SocialLinks from '../components/form/SocialLinks';

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        openingHours: '',
        image: '',
        description: '',
        type: '',
        email: '',
        website: '',
        phoneNumber: '',
        socialMediaLinks: '',
        tags: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/businesses', formData); // Assuming '/api/businesses' is your endpoint
            console.log('Form data sent:', response.data);
            // Handle success or redirect
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error state
        }
    };

    return (
        <div>
            <HeaderNavbar />
            <Container className="form-container">
                <h2 className='form-title'>Add a new Business</h2>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12}>
                            <p className='text-white'><span style={{ color: 'red' }}>*</span> Required</p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Business Name<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control type="text" name="name" placeholder="Name" required onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Address<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control type="text" name="address" placeholder="Address" required onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Email<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control type="text" name="email" placeholder="Email" required onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Phone Number<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control type="text" name="website" placeholder="Phone Number" required onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>
                                    Type<span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <Form.Control as="select" defaultValue="" name="type" required onChange={handleChange}>
                                    <option value="" disabled hidden>Select Type</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Cafe">Cafe</option>
                                    <option value="Shop">Shop</option>
                                    {/* Add more options as needed */}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Website</Form.Label>
                                <Form.Control type="text" name="website" placeholder="https://japanika.net" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Tags<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control type="text" name="tags" placeholder="Tags" required onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>Image</Form.Label>
                                <Form.Control type="text" name="image" placeholder="Link to an image" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='text-white'>
                                    Opening Hours<span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <OpeningHoursSelect day="Sunday" />
                                <OpeningHoursSelect day="Monday" />
                                <OpeningHoursSelect day="Tuesday" />
                                <OpeningHoursSelect day="Wednesday" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Label><br /></Form.Label>
                            <Form.Group>
                                <OpeningHoursSelect day="Thursday" />
                                <OpeningHoursSelect day="Friday" />
                                <OpeningHoursSelect day="Saturday" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label className='text-white'>Description
                                    <span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" maxLength={400} placeholder="Description" required onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <SocialLinks />
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <Button variant="primary" type="submit" className='button'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Footer />
        </div>
    );
};

export default FormPage;
