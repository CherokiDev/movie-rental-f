import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import './Header.scss';

const Header = (props) => {

    const history = useHistory();

    const salir = async() => {
        localStorage.clear();
        await axios.put(process.env.REACT_APP_BASE_URL + '/users/logout/' + props.user.email)
        history.push('/');
        await props.dispatch({ type: LOGOUT, payload: {}});
    }


    const adminRoles = [1];

    return (
        <header className="header">
            {props.user?.email
                ?
                <div className="containerButtons">
                    <div className="buttonHome"></div>
                    {adminRoles.includes(props.user.role) && <NavLink to ="/admin/usersmovies" className="button" exact activeStyle={{ display: 'none' }}>Ver todo (admin)</NavLink>}
                    <NavLink to="/profile" className="button" exact activeStyle={{ display: 'none' }}>Alquiladas</NavLink>
                    <NavLink to="/catalogue" className="button" exact activeStyle={{ display: 'none' }}>Volver</NavLink>
                    <NavLink to="/" onClick={salir} className="button" exact activeStyle={{ display: 'none' }}>Salir</NavLink>
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