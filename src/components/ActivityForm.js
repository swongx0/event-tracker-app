import React, { uesState, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import {v4 as uuidv4 } from 'uuid'
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ActivityForm = (props) => {
    const [activity, setActivity] = useState(() => {
        return {
            activityName: props.activity ? props.activity.activityName : '',
            date: props.activity ? props.activity.date : '',
            startTime: props.activity ? props.activity.startTime : '',
            endTime: props.activity ? props.activity.endTime : '',
            numMaxGuests: props.activity ? props.activity.numMaxGuests : ''
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const {activityName, endTime, numMaxGuests} = activity;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [activityName, date, startTime, endTime, numMaxGuests];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled){
            const activity = {
                id: uuidv4(),
                activityName,
                date,
                startTime,
                endTime,
                numMaxGuests
            };
            props.handleOnSubmit(activity);
        } else {
            errorMsg = 'Please fill out all the fields';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'startTime':
        if (value === '' || parseInt(value) === +value) {
          setActivity((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'endTime':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setActivity((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setActivity((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };


    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="activityName">
                    <Form.Label>Activity Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="activityName"
                        value={activityName}
                        placeholder="Enter name of activity"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <ReactDatePicker
                        className="input-control"
                        selected={date}
                        onChange={date => setDate(date)}
                        value={date}
                        dateFormat="yyyy-MM-dd"
                    />
                </Form.Group>
                <Form.Group controlId="startTime">
                    <Form.Label>Start Time</Form.Label>
                    <ReactDatePicker
                        className="input-control"
                        selected={startTime}
                        onChange={(startTime) => setStartTime(startTime)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                   
                </Form.Group>
                <Form.Group controlId="endTime">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="endTime"
                        value={endTime}
                        placeholder="End Time"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="numMaxGuests">
                    <Form.Label>Number of Guests</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="numMaxGuests"
                        value={numMaxGuests}
                        placeholder="Number of guests"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                Save
                </Button>
            </Form>
        </div>
    );
};

export default ActivityForm;