import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import {v4 as uuidv4 } from 'uuid'
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";


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
    const [endTime, setEndTime] = useState(new Date());
    const {activityName, numMaxGuests} = activity;

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
    if (name) {
        setActivity((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };


    return (
        <div className="main-form">
            <Header />
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
                        minDate={moment().toDate()}
                        value={date}
                        dateFormat="yyyy-MM-dd"
                    />
                </Form.Group>
                <Form.Group controlId="startTime" className="timeInputs">
                    <Form.Label>Start Time</Form.Label>
                    <ReactDatePicker
                        className="input-control"
                        selected={startTime}
                        onChange={startTime => setStartTime(startTime)}
                        value={startTime}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </Form.Group>
                <Form.Group controlId="endTime" className="timeInputs">
                    <Form.Label>End Time</Form.Label>
                    <ReactDatePicker
                        className="input-control"
                        selected={endTime}
                        onChange={endTime => setEndTime(endTime)}
                        value={endTime}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
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
                <div className="align">
                    <Button type="submit" className="save-btn">
                     Save
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ActivityForm;