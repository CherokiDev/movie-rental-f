import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GET_MOVIES } from '../../redux/types';
import './Catalogue.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Catalogue = (props) => {

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/movies/')
            .then(res => {
                props.dispatch({ type: GET_MOVIES, payload: res.data });
            }).catch((err) => {
                console.log(err)
            });
            // eslint-disable-next-line
    }, [])

    const [search, setSearch] = useState("")


    const searchMovies = event => {
        setSearch(event.target.value)
        //console.log(event.target, search);
    }

    const [selectedMovie, setSelectedMovie] = useState({})



    const searchEngine = (props) => {
        const result = props.movies?.filter(movie => {
            //console.log(search, movie.title.indexOf(search))
            return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        if (search !== "")
            return result.map(movie => <div className="movies" onClick={() => setSelectedMovie(movie)}>
                <Button onClick={abrirModal}>+info</Button>
                {/* <h4>{movie.title}</h4> */}
                <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" /></div>)
    }

    

    const [modal, setModal] = useState(false)



    const abrirModal = () => {
        setModal({ abierto: !modal.abierto });
    }

    const compruebaToken = localStorage.getItem('token');

   

    const rentMovie = async () => {
        
        console.log(selectedMovie.id)
        console.log(compruebaToken)
        await axios.post('http://localhost:3000/orders', {movies:[selectedMovie.id]}, {  headers: {
            Authorization: "Bearer " + compruebaToken
        }});
        setModal({ abierto: !modal.abierto });
    }


    return (
        <>
            <div className="body">
                <div className="background">
                    <div className="search">
                        <input type="text" onKeyUp={searchMovies}></input>
                    </div>

                    <div className="containerMovies">

                        <div className="titleMovies">
                            {searchEngine(props)}
                        </div>

                        <div className="allMovies">
                            {props.movies?.map(movie =>
                                <div className="movies" onClick={() => setSelectedMovie(movie)}>
                                    <Button onClick={abrirModal}>+info</Button>
                                    {/* <h4>{movie.title}</h4> */}
                                    <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" />
                                </div>)}
                        </div>

                    </div>
                </div>


            </div>

            <Modal className="modal" isOpen={modal.abierto}>
                <ModalHeader>
                    <h2>{selectedMovie?.title ?selectedMovie.title:""}</h2>
                </ModalHeader>

                <ModalBody>
                    pelicula
            </ModalBody>

                <ModalFooter>
                    <Button onClick={rentMovie}>Alquilar</Button>
                    <Button onClick={abrirModal}>Salir</Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Catalogue);