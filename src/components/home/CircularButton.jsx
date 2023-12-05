import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/home/circularButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CircularButton = (props) => {
    return (
        <div className='custom-button'>
            <Button className="circular-button" onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} size="lg"/>
            </Button>
            <span className="title">{props.label}</span>
        </div>
    );
};

export default CircularButton;
