import React, {useContext} from "react";
import ActivityForm from './ActivityForm';
import ActivitiesContext from "../context/ActivitiesContext";

const AddTimeSlot = ({ history }) => {
    const {activities, setActivities} = useContext(ActivitiesContext);

    const handleOnSubmit = (activity) => {
        setActivities([activity, ...activities]);
        history.push('/');
    };

    return (
        <React.Fragment>
            <ActivityForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddTimeSlot;

