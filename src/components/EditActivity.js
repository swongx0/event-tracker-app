import React, {useContext} from "react";
import ActivityForm from "./ActivityForm";
import { useParams } from "react-router";
import ActivitiesContext from "../context/ActivitiesContext";

const EditActivity = ({ history }) => {
    const {activities, setActivities} = useContext(ActivitiesContext);
    const { id } = useParams();
    const activityToEdit = activities.find((activity) => activity.id === id );

    const handleOnSubmit = (activity) => {
        const filteredActivities = activities.filter((activity) => activity.id !== id);
        setActivities([activity, ...filteredActivities]);
        history.push('/');
    };

    return (
        <div>
            <ActivityForm activity={activityToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditActivity;