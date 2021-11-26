import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Peek Timeslot App</h1>
            <hr/>
            <div className="links">
                <Button className="schedule-btn">
                    <NavLink to="/add">
                    Schedule a new timeslot
                    </NavLink>      
                </Button>
                <br />
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Upcoming Events
                </NavLink>
            </div>
        </header>
    );
};

export default Header;