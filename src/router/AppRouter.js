import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import AddTimeSlot from "../components/AddTimeslot";
import Timeslots from "../components/Timeslots";
import useLocalStorage from "../hooks/useLocalStorage";
import EditActivity from "../components/EditActivity";
import ActivitiesContext from "../context/ActivitiesContext";

const AppRouter = () => {
    const [activities, setActivities] = useLocalStorage('activities', []);
    return (
        <BrowserRouter> 
            <div className="main-content">
                <ActivitiesContext.Provider value={{ activities, setActivities }}>
                    <Switch>
                        <Route component={Timeslots} path="/" exact={true} />
                        <Route component={AddTimeSlot} path="/add" />
                        <Route component={EditActivity} path="/edit/:id" />
                        <Route component={() => <Redirect to="/" />} />
                    </Switch>
                </ActivitiesContext.Provider>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;