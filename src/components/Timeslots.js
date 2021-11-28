import React, {useContext, useState} from "react";
import _ from "lodash";
import Activity from "./Activity";
import Header from "./Header";
import ActivitiesContext from "../context/ActivitiesContext";

const Timeslots = () => {
    const {activities, setActivities} = useContext(ActivitiesContext);
    const [isList, setList] = useState("false");
    const [isGrid, setGrid] = useState("false");

    const handleRemoveActivity = (id) => {
        setActivities(activities.filter((activity) => activity.id !== id));
    };

    const handleView = () => {
    setList(!isList);
    setGrid(!setGrid);
    };

    return (
        <React.Fragment>
            <Header handleView={handleView}/>
            <div className={`activity-grid ${isList ? "activity-list" : ""} ${isGrid ? "activity-grid" : ""}`} >
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