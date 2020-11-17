import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GET_MOVIES } from '../../redux/types';
import './Catalogue.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Catalogue = (props) => {
    const [search, setSearch] = useState("")
    const [selectedMovie, setSelectedMovie] = useState({})
    const [modal, setModal] = useState(false)

    const searchMovies = event => {
        setSearch(event.target.value)
    }

    const abrirModal = () => {
        setModal({ abierto: !modal.abierto });
    }

    const compruebaToken = localStorage.getItem('token');

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/movies/')
            .then(res => {
                props.dispatch({ type: GET_MOVIES, payload: res.data });
            }).catch((err) => {
                console.log(err)
            });
        // eslint-disable-next-line
    }, [])

    const searchEngine = (props) => {
        const result = props.movies?.filter(movie => {
            return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        if (search !== "" && search.length >= 4)
            return result.map(movie => <div className="movies" onClick={() => setSelectedMovie(movie)}>
                <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" onClick={abrirModal} /></div>)
    }

    const rentMovie = async () => {
        await axios.post(process.env.REACT_APP_BASE_URL + '/orders', { movies: [selectedMovie.id] }, {
            headers: {
                Authorization: "Bearer " + compruebaToken
            }
        });
        setModal({ abierto: !modal.abierto });
    }

    return (
        <>
            <div className="bodyCat">
                <div className="backgroundCat">
                    <div className="search">
                        <input type="text" placeholder="Buscar" onKeyUp={searchMovies}></input>
                    </div>
                    
                    <div className="containerMovies">
                        <div className="moviesByTitle">
                            {searchEngine(props)}
                        </div>
                        <div className="moviesAll">
                            {props.movies?.map(movie =>
                                <div className="movies" key={movie.id} onClick={() => setSelectedMovie(movie)}>
                                    {/* <Button onClick={abrirModal}>+info</Button> */}
                                    {/* <h4>{movie.title}</h4> */}
                                    <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" onClick={abrirModal} />
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>

            <Modal className="modal" isOpen={modal.abierto}>
                <ModalHeader className="headerModal">
                    <h1 className="titleModal">{selectedMovie?.title ? selectedMovie.title : ""}</h1>
                </ModalHeader>

                <ModalBody className="bodyModal">
                    <div className="imgModal">
                        <img src={'https://image.tmdb.org/t/p/w185' + selectedMovie?.poster_path ? 'https://image.tmdb.org/t/p/w185' + selectedMovie.poster_path : ""} alt="" />
                    </div>
                    <div className="infoModal">
                        <div className="overviewModal">{selectedMovie?.overview ? selectedMovie.overview : ""}</div>
                        <div className="priceModal">Precio 5€</div>
                    </div>
                </ModalBody>

                <ModalFooter className="footerModal">
                    <Button onClick={rentMovie} className="rentModal">Alquilar</Button>
                    <Button onClick={abrirModal} className="cancelModal">Cancelar</Button>
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