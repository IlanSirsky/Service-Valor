import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import '../../styles/form/socialLinks.css';

const SocialLinks = () => {
    const [socialPlatform, setSocialPlatform] = useState('');
    const [link, setLink] = useState('');
    const [socialLinks, setSocialLinks] = useState([]);

    const handlePlatformChange = (e) => {
        setSocialPlatform(e.target.value);
    };

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    const handleAddLink = () => {
        if (socialPlatform && link) {
            const newLink = { platform: socialPlatform, link };
            setSocialLinks([...socialLinks, newLink]);
            setSocialPlatform('');
            setLink('');
        }
    };

    const handleRemoveLink = (index) => {
        const updatedLinks = [...socialLinks];
        updatedLinks.splice(index, 1);
        setSocialLinks(updatedLinks);
    };

    return (
        <div>
            <Form.Label className='text-white'>Social Media Links</Form.Label>
            <Row className='mb-3 align-items-center'>
                <Col xs={4}>
                    <Form.Control as="select" value={socialPlatform} onChange={handlePlatformChange}>
                        <option value="">Select Platform</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter/X">Twitter / X</option>
                        <option value="Instagram">Instagram</option>
                        {/* Add more options as needed */}
                    </Form.Control>
                </Col>
                <Col xs={6}>
                    <Form.Control type="text" placeholder="Enter Link" value={link} onChange={handleLinkChange} />
                </Col>
                <Col xs={2}>
                    <Button className='add-button' onClick={handleAddLink}>Add</Button>
                </Col>
            </Row>
            <div>
                {socialLinks.map((social, index) => (
                    <div key={index}>
                        <p className='social-link'>{social.platform}: {social.link}
                            <Button variant="danger" size="sm" className="ms-2" onClick={() => handleRemoveLink(index)}>Remove</Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
