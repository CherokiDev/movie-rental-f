// Importo las dependencias que vamos a emplear en el archivo
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';


// Hoja de estilos
import './Login.scss'

// Logica de la función 'Login'
const Login = ( props ) => {

    const history = useHistory ();

    // Declaramos el valor de los datos que recogemos en la pantalla de LOGIN 
    const user = {
        email: props.email,
        password: props.password
    };

    // Metodo POST hacia la base de datos
    const Send = () => {
        
        axios.post ('http://localhost:3000/users/login', user)

        .then ( res => {
            localStorage.setItem ('token', res.data.token);
            localStorage.setItem ('user', JSON.stringify (res.data))

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
                        <div className="contInput">
                            <label className="labelLogin">
                                <input type="email" placeholder="Correo electrónico"/>
                            </label>
                        </div>
                        <div className="nullForm"></div>
                        <div className="contInput">
                            <label className="labelLogin">
                                <input type="password" placeholder="Contraseña"/>
                            </label>
                        </div>
                        

                
                    </div>
                </div>
            </div>  
        </div>
              

    )
}

export default Login;