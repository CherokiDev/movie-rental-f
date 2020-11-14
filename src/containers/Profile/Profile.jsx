// Importo las dependencias necesarias
import React from 'react';
import axios from 'axios';
import {GET_PROFILE} from '../../redux/types';


// Hoja de estilos
import './Profile.scss';

// Logica de la pagina 'Profile'
const Profile = ( props ) => {

    // Funcion para traer los pedidos actules del usuario
    const getOrders = () => {

        // Peticion GET hacia la base de datos
        let orders = axios.get(process.env.REACT_APP_BASE_URL + 'orders')

        
        .then ( res => {
            
            // Almacenamos la informacion en Redux
            orders.dispatch({type: GET_ORDERS, payload: res.data});
            
            

        })

    }

    return (



    );
}

export default Profile;