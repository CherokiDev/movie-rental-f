import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';



const Header = (props) => {
    return (
        <header className="header">
            <div className="buttons">
                <div className="buttonHome">
                    <NavLink to="/" exact></NavLink>
                </div>
                <div className="buttonLogin">
                    <NavLink to="/login" exact activeStyle={{ display: 'none' }}>Login</NavLink>
                </div>
                <div className="buttonRegister">
                    <NavLink to="/login/register" exact activeStyle={{ display: 'none' }}>Register</NavLink>
                </div>
                <div className="buttonMovies">
                    <NavLink to="/profile/movies" exact activeStyle={{ display: 'none' }}>Logout</NavLink>
                </div>
            </div>
        </header>
    )
}



export default Header;