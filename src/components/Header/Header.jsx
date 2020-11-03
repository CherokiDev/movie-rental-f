import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

// const Header = (props) => {
const Header = (props) => {
    
    return (
        <header className="header">
            <Link to="/">Home</Link>
            {/* {props.user ? */}
            
                <div className="notLoggedIn">
                    <Link to="/login">Login</Link>
        
                </div>

        </header>
    )
}



export default Header;