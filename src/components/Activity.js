import React, {useState} from "react";
import { Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import {BsFillPencilFill, BsFillTrashFill, BsFillCircleFill, BsXCircleFill} from 'react-icons/bs'

const Activity = ({
    id,
    activityName,
    date,
    startTime,
    endTime,
    numMaxGuests,
    handleRemoveActivity,
}) => {
    const history = useHistory();
    const [isActive, setActive] = useState("false");

    const handleStatus = () => {
    setActive(!isActive);
    };

    return (
        <Card style={{width: '23rem'}} className="activity">
            <Card.Body>
                <BsFillCircleFill className={isActive ? "active" : "cancelled"} />
                <Card.Title className={isActive ? "activity-title" : "activity-cancelled"}>{activityName}</Card.Title>
                <div className={isActive ? "activity-details" : "activity-details-cancelled"}>
                    <div>{new Date(date).toDateString()}</div>
                    <div>{new Date(startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {new Date(endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    <div>Guests: {numMaxGuests}</div>
                </div>
                <BsFillPencilFill variant="primary" onClick={() => history.push(`/edit/${id}`)}/>
                {' '}
                <BsXCircleFill onClick={handleStatus} className={isActive ? "" : "hidden"}/>
                <BsFillTrashFill className={isActive ? "hidden" : ""} variant="danger" onClick={() => handleRemoveActivity(id)}/>            
            </Card.Body>
        </Card>
    );
};

export default Activity;