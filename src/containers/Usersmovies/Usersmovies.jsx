import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Usersmovies.scss'


const Usersmovies = () => {

    const [all, setAll] = useState([])
    const getAll = () => {
        return axios.get(process.env.REACT_APP_BASE_URL + '/orders/all')
            .then((res) => {
                setAll(res.data);
                return res;
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        const compruebaRole = JSON.parse(localStorage.getItem('user'));
        const allUsersmovies = async () => {
            await getAll(compruebaRole.role[1])
        }
        allUsersmovies()
    }, []);

    return (
        <div className="body">
            <div className="background">
                <div className="allUsersmovies">

                    <div className="borde">
                        <div>USUARIO</div>
                        {all?.map(usersmovies => <div className="usersmovies">

                            <div className="tabla">
                                <div> {usersmovies.User.email}</div>
                            </div>
                        </div>)}
                    </div>


                    <div className="borde">
                        <div>PELÍCULA</div>
                        {all?.map(usersmovies => <div className="usersmovies">

                            <div className="tabla">
                                {usersmovies.movies.map(movie =>
                                    <div>{movie.title}</div>)}
                            </div>
                        </div>)}
                    </div>


                    <div className="borde">
                       <div> FECHA DE ALQUILER</div>
                    {all?.map(usersmovies => <div className="usersmovies">

                        <div className="tabla">
                            <div>{usersmovies.createdAt}</div>
                        </div>
                    </div>)}
                    </div>


                    <div className="borde">
                       <div>FECHA DE DEVOLUCIÓN</div>
                    {all?.map(usersmovies => <div className="usersmovies">

                        <div className="tabla">
                            <div>{usersmovies.returnDate}</div>
                        </div>
                    </div>)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Usersmovies;