import React, { useEffect, useState } from 'react'
import StarRating from '../StarRating';
import Loader from './Loader';

const KEY = "4cf53355";

const SelectedMovie = ({ selectedId, onCloseMovie , onAddWatched }) => {
    const [singleMovie, setSingleMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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

function handleAdd(){
    const newWatchedMovie = {
        imdbID:selectedId,
        Title: Title,
        Year : Year, 
        Poster: Poster,
        imdbRating : Number(imdbRating),
        Runtime : Number(Runtime.split(" ").at(0)),     
    }
    // console.log(newWatchedMovie)
    onAddWatched(newWatchedMovie);
    onCloseMovie()
}

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setSingleMovie(data);
            setIsLoading(false);
        }
        getMovieDetails();
    }
        , [selectedId]);

        useEffect(
            function (){
                if(!Title) return;
                document.title = `Movie | ${Title}`;
                // clean-up function 
                return () => {
                    document.title = "usePopcorn"
                }
            }
            , [Title]
        )

    return (
        <div className='details'>
            {isLoading ? <Loader /> :
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
                        <img src={Poster} alt={`poster of ${singleMovie}`} />
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
                        <div className='rating'>
                            <StarRating maxRating={10} size={24} />
                            <button className='btn-add' onClick={handleAdd}>+ Add to List</button>
                        </div>
                        <p><em>{Plot}</em></p>
                        <p>Starring by : {Actors}</p>
                        <p>Directed by :  {Director} in <span><i>{Year}</i></span></p>
                    </section>
                </>
            }
        </div>
    )
}

export default SelectedMovie