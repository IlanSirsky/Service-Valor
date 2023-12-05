import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Col, Form, Row } from 'react-bootstrap';

const OpeningHoursSelect = ({ day }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleOpenCloseChange = (e) => {
        setIsOpen(e.target.checked);
        // Reset the time pickers when switching between open/close
        setStartDate(null);
        setEndDate(null);
    };

    return (
        <Row className='mb-3 align-items-center'>
            <Col xs={2}>
                <Form.Check
                    type="switch"
                    id={`custom-switch-${day}`}
                    // label={isOpen ? 'Open' : 'Close'}
                    checked={isOpen}
                    onChange={handleOpenCloseChange}
                    className='text-white'
                />
            </Col>
            <Form.Label column xs={3} className='text-white'>{day}:</Form.Label>
            {isOpen && (
                <>
                    <Col xs={3}>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60}
                            dateFormat="h:mm aa"
                            placeholderText="Select Start"
                            className="form-control"
                            required
                        />
                    </Col>
                    <Col xs={3}>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60}
                            dateFormat="h:mm aa"
                            placeholderText="Select End"
                            className="form-control"
                            required
                        />
                    </Col>
                </>
            )}
        </Row>
    );
};

export default OpeningHoursSelect;