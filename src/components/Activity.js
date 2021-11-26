import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Activity = ({
    id,
    activityName,
    date,
    startTime,
    endTime,
    numMaxGuests,
    handleRemoveActivity
}) => {
    const history = useHistory();
    return (
        <Card style={{width: '18rem'}} className="activity">
            <Card.Body>
                <Card.Title className="activity-title">{activityName}</Card.Title>
                <div className="activity-details">
                    <div>{new Date(date).toDateString()}</div>
                    <div>{startTime} - {endTime}</div>
                    <div>Guests: {numMaxGuests}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveActivity(id)}>
                Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Activity;