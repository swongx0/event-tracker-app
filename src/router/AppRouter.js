import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import AddTimeSlot from "../components/AddTimeslot";
import Timeslots from "../components/Timeslots";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
    const [activities, setActivities] = useLocalStorage('activities', []);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={Timeslots} path='/' exact={true} />
                        <Route
                            render={(props) => (
                                <AddTimeSlot {...props} activities={activities} setActivities={setActivities} />
                            )}
                            path="/add"
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;