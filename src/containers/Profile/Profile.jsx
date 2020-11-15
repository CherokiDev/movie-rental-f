import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Profile.scss';

const Profile = () => {
    const [rented, setRented] = useState([]);
    

    const getRented = (id) => {
        return axios.get(process.env.REACT_APP_BASE_URL + '/orders/' + id)
            .then((res) => {
                setRented(res.data);
                return res;
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        const compruebaId = JSON.parse(localStorage.getItem('user'));
        const moviesRented = async () => {
            await getRented(compruebaId.id)
        }
        moviesRented()
    }, []);


    return (
        <>
            <div className="body">
                <div className="background">
                <div className="containerRented">
                    {rented?.map(rented =>
                        <div className="rented" key={rented.id}> FECHA DE ALQUILER {rented.createdAt} <br /> FECHA DE DEVOLUCIÓN {rented.returnDate} {rented.movies.map(movie =>
                            <div className="titleRented"> {/* {movie.title} */}
                                <img className="imgRented" src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" /> </div>)}
                        </div>)}
                </div>
                </div>
            </div>
        </>
    )
}


export default Profile;
