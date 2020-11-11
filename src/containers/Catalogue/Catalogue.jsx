import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GET_MOVIES } from '../../redux/types';
import './Catalogue.scss'


const Catalogue = (props) => {

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/movies/')
            .then(res => {
                props.dispatch({ type: GET_MOVIES, payload: res.data });
            }).catch((err) => {
                console.log(err)
            });
    }, [])
    
    const [search, setSearch] = useState("")
    
    let movies = []

    movies = props.movies

    const searchMovies = event => {
        setSearch(event.target.value)
        //console.log(event.target, search);
    }

    //const [moviesFiltered, setMoviesFiltered] = useState([])

    const searchEngine = (props) => {
        const result = props.movies?.filter(movie => {
            //console.log(search, movie.title.indexOf(search))
            return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        if (search != "")
            return result.map(movie => <div>{movie.title}</div>)
    }


    return (
        <div className="body">
            <div className="background">
                <div className="containerSearch">
                    <input type="text" onKeyUp={searchMovies}></input>
                    <div className="moviesSearched">
                        {searchEngine(props)}
                    </div>
                </div>
                <div className="containerAllMovies">

                    <div className="allMovies">
                        {props.movies?.map(movie =>
                            <div className="movies">
                                <h3>{movie.title}</h3>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Catalogue);