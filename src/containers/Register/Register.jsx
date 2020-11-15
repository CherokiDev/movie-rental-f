import React from 'react';
import './Register.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault(); // para evitar refrescar la página
        const body = {
            firstname: event.target.firstname.value,
            surname: event.target.surname.value,
            email: event.target.email.value,
            password: event.target.password.value,
            phone: event.target.phone.value,
            birthdate: event.target.birthdate.value,
            credit_card: event.target.credit_card.value
        };

        axios.post(process.env.REACT_APP_BASE_URL + '/users/signup', body)
            .then(res => {
                console.log(res.data)
                setTimeout(() => {
                    history.push('/')
                }, 1500);
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="body">
            <div className="background">
                <div className="nullHeader"></div>
                <div className="formContainer">
                    <div className="registerText"><h2>Regístrate ahora</h2></div>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <input className="inputreg" type="text" name="firstname" required placeholder="Nombre" />
                        <input className="inputreg" type="text" name="surname" required placeholder="Apellidos" />
                        <input className="inputreg" type="email" name="email" required placeholder="Correo electrónico" />
                        <input className="inputreg" type="password" name="password" required placeholder="Contraseña" />
                        <input className="inputreg" type='text' name="phone" required placeholder="Número de teléfono" />
                        <input className="inputreg" type="text" name="birthdate" required placeholder="Fecha de nacimiento" />
                        <input className="inputreg" type="text" name="credit_card" required placeholder="Número de tarjeta" />
                        <button type="submit">Regístrate</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Register;