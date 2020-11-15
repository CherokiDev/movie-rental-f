import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
    render() {
        return (
            <div className="body">
                <div className="background">
                    <div className="card">
                        <h1 className="card-title">Entretenimiento sin fin.
50 % de descuento los dos primeros meses.</h1>
                        <h2 className="card-subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
                        <form className="form">
                            <h3 className="form-text">¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.</h3>
                            <div className="form-inside">
                                <input className="form-input" placeholder="Correo electrónico"></input>
                                <div className="form-button"><a href="login/register">PRUEBA NETFLIX CON UN 50% DE DESCUENTO</a></div>
                            </div>
                        </form>
                        <h3 className="card-disclaimer">Solo los nuevos suscriptores podrán optar a esta oferta.</h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;