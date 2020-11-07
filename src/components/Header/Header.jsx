import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';



const Header = (props) => {



    //const home = window.location.href="/"


    return (
        <header className="header">
            <NavLink to="/" exact>Home</NavLink>
            <div className="notLoggedIn">
                <NavLink to="/login" exact activeStyle={{ display: 'none' }}>Login</NavLink>
            </div>
            <div className="notLoggedIn">
                <NavLink to="/login/register" exact activeStyle={{ display: 'none' }}>Register</NavLink>
            </div>
            <div className="notLoggedIn">
                <NavLink to="/profile/movies" exact activeStyle={{ display: 'none' }}>Logout</NavLink>
            </div>
        </header>
    )
}



export default Header;