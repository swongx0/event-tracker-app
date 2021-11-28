import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MdFormatListBulleted, MdGridView } from 'react-icons/md'


const Header = ({handleView}) => {

    return (
        <header>
            <h1>Peek Timeslot App</h1>
            <hr/>
            <div className="links">
                <Button className="schedule-btn">
                    <NavLink to="/add" style={{ textDecoration: 'none' }}>
                        Schedule a new timeslot
                    </NavLink>
                </Button>      
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