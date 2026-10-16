import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MdFormatListBulleted, MdGridView } from 'react-icons/md'


const Header = ({handleView}) => {

    return (
        <header>
            <h1>Event Tracker</h1>
            <hr/>
            <div className="links">
                <NavLink to="/add" style={{ textDecoration: 'none' }}>
                    <Button className="schedule-btn">
                        Schedule a new timeslot
                    </Button>    
                </NavLink>  
                <br />
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Upcoming Events
                </NavLink>
            </div>
            <MdFormatListBulleted onClick={handleView}/>
            <MdGridView onClick={handleView}/>
        </header>
    );
};

export default Header;