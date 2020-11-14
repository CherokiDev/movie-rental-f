// Importo las dependencias necesarias
import React from 'react';
import axios from 'axios';
import {GET_PROFILE} from '../../redux/types';
import {connect} from 'react-redux';


// Hoja de estilos
import './Profile.scss';

// Logica de la pagina 'Profile'
const Profile = ( props ) => {

    // Funcion para traer los pedidos actules del usuario
    const getOrders = () => {

        // Obtengo el token del Local Storage
        const token = localStorage.getItem ('token');

        // Creo una variable para enviar el token mediante la propiedad 'Bearer Token' en el Header
        const validate = { headers: { Authorization: `Bearer ${token}` }};

        // Peticion GET hacia la base de datos
        axios.get(process.env.REACT_APP_BASE_URL + '/orders', validate)

        .then ( res => {
            
            // Almacenamos la informacion en Redux
            props.dispatch({type: GET_PROFILE, payload: res.data});
            
        })
        .catch ( error => console.log ( error ))

    }

    return (

        <div className="orders">PRUEBA
            <button type='button' className="getInfo" onClick={getOrders}></button>
        </div>

    )
}

export default connect () (Profile);