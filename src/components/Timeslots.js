import React, {useContext} from "react";
import _ from "lodash";
import Activity from "./Activity";
import ActivitiesContext from "../context/ActivitiesContext";

const Timeslots = () => {
    const {activities, setActivities} = useContext(ActivitiesContext);

    const handleRemoveActivity = (id) => {
        setActivities(activities.filter((activity) => activity.id !== id));
    };

    return (
        <React.Fragment>
            <div className="activity-list">
                {!_.isEmpty(activities) ? (
                    activities.map((activity) => (
                        <Activity key={activity.id} {...activity} handleRemoveActivity={handleRemoveActivity} />
                    ))
                ) : (
                    <p className="message">No upcoming events</p>
                )}
            </div>
        </React.Fragment>
    );
};

export default Timeslots;