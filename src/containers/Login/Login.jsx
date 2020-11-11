// Importo las dependencias que vamos a emplear en el archivo
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {LOGIN} from '../../redux/types';
import { connect } from 'react-redux';

// Hoja de estilos
import './Login.scss'

// Logica de la función 'Login'
const Login = ( props ) => {

    const history = useHistory ();
    
    // Metodo POST hacia la base de datos
    const send = event  => {
        
        // Evitamos que la pagina refresque
        event.preventDefault ();

        // Declaramos el valor de los datos que recogemos en la pantalla de LOGIN 
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        // POST hacia el Back
        axios.post ( process.env.REACT_APP_BASE_URL + '/users/login', user )

        .then ( res => {
            localStorage.setItem ('token', res.data.token);
            localStorage.setItem ('user', JSON.stringify (res.data))

            props.dispatch ({ type: LOGIN, payload: res.data })

            // Redireccionamos al usuario hacia la vista que especifiquemos
            setTimeout (() => {
                history.push ('/')
            }, 1200)
        } )
        .catch ( error => { console.log (error)});
    }

    return (

        <div className="containerLogin">
            <div className="nullHeadLogin"></div>
            <div className="loginBody">
                <div className="containForm">
                    <div className="formDiv">
                        <div className="formLogin">
                            <h1 className="textLogin">Iniciar sesión</h1>
                        </div>
                        <form className="formLogin" onSubmit={ send }>
                            <input type="email" name="email" className="mailInput" placeholder="Correo electrónico"/>
                            <div className="nullForm"></div>
                            <input type="password" name="password" className="passwordInput" placeholder="Contraseña"/>
                            <div className="nullForm2"></div>
                            <button type="submit" className="sendButton"><h4>Iniciar sesión</h4></button>
                        </form>
                    </div>
                    <div className="linkRegister">¿Todavía sin Netflix? <a href="/users/register">Suscríbete ya</a>.</div>
                </div>
            </div>  
        </div>
              

    )
}

export default connect () (Login);