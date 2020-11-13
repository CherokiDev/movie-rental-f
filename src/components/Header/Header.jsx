import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            {props.user?.email
                ?
                <div className="containerButtons">
                    <div className="buttonHome"></div>
                    <NavLink to="/profile" className="button" exact activeStyle={{ display: 'none' }}>Alquiladas</NavLink>
                    <NavLink to="/catalogue" className="button" exact activeStyle={{ display: 'none' }}>Volver</NavLink>
                    <NavLink to="/" className="button" exact activeStyle={{ display: 'none' }}>Salir</NavLink>
                </div>
                :
                <div className="containerButtons">
                    <div className="buttonHome">
                        <NavLink to="/" exact></NavLink>
                    </div>
                    <NavLink to="/login" className="button" exact activeStyle={{ display: 'none' }}>Iniciar sesión</NavLink>
                </div>}
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);