import React from 'react';
import './Register.scss';
import { connect } from 'react-redux';
import { REGISTER } from '../../redux/types';
import axios from 'axios';

const Register = (props) => {
    
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const body ={
            firstname:event.target.firstname.value,
            surname:event.target.surname.value,
            email:event.target.email.value,
            password:event.target.password.value,
            phone:event.target.phone.value,
            birthdate:event.target.birthdate.value,
            credit_card:event.target.credit_card.value
        };
        
        axios.post(process.env.REACT_APP_BASE_URL+'/user/signup',body)
        props.dispatch({ type: REGISTER, payload:{}});
    }
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input className="inputreg" type="text" name="firstname" required placeholder="Introduce tu nombre" />
            <input className="inputreg" type="text" name="surname" required placeholder="Introduce tu apellido" />
            <input className="inputreg" type="email" name="email" required placeholder="Introduce tu email" />
            <input className="inputreg" type="password" name="password" required placeholder="Introduce tu contraseña"/>
            <input className="inputreg" type='text' name="phone" required placeholder="Introduce tu número de teléfono" />
            <input className="inputreg" type="text" name="birthdate" required placeholder="Introduce tu fecha de nacimiento" />
            <input className="inputreg" type="text" name="credit_card" required placeholder="Introduce el número de tu tarjeta de credito" />
            <button type="submit">Regístrate</button>
        </form>
    )
}



export default Register;