import React, { useEffect, useState } from 'react'

const KEY = "4cf53355";

const SelectedMovie = ({ selectedId, onCloseMovie }) => {
    const [singleMovie, setSingleMovie] = useState({});

    // object destructuring 
    const {
        Title,
        Year,
        Poster,
        Runtime,
        imdbRating,
        Plot,
        Released,
        Actors,
        Director,
        Genre
    } = singleMovie;

    useEffect(() => {
        const getMovieDetails = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setSingleMovie(data)
        }
        getMovieDetails();
    }
        , [selectedId]);

    return (
        <div className='details'>

            <header>
            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
            <img src={Poster} alt={`poster of ${singleMovie}`}/>
            <div className='details-overview'>
                <h2>{Title}</h2>
                <p>{Released} &bull; {Runtime} </p>
                <p>{Genre}</p>
                <p>
                    <span>★</span>
                    {imdbRating} IMDb rating
                </p>
            </div>
            </header>

         <section>
            <p><em>{Plot}</em></p>
            
            <p>Starring by : {Actors}</p>
            <p>Directed by :  {Director} in <span><i>{Year}</i></span></p>
         </section>

            {selectedId}</div>
    )
}

export default SelectedMovie