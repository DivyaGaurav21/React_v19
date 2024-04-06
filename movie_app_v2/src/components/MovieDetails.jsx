import React, { useEffect, useState } from 'react';
import StarRating from './WatchedBox/StarRating';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const KEY = "4cf53355";

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {

  const [singleMovie, setSingleMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);

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

  function handleWatchedMovie() {
    const watchedMovie = {
      imdbID: selectedId,
      Poster,
      Title,
      imdbRating: Number(imdbRating),
      runtime: Number(Runtime.split(" ").at(0)),
      userRating

    }
    onAddWatched(watchedMovie);
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
  }, [selectedId]);

  useEffect(() => {
    document.title = `Movie | ${Title}`

    return function () {
      document.title = "Movie App"
    }

  }, [Title]);

  return (
    <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <button onClick={onCloseMovie} className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-xl mb-6">Go Back</button>
      <div className="max-w-7xl mx-auto">
        {isLoading ? <Skeleton count={1} style={{ height: "450px", background: "grey" }} /> :
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
              <img src={Poster} alt={`Poster of ${Title}`} className="w-32 h-auto" />
              <div className="details-overview ml-6">
                <h2 className="text-2xl font-semibold">{Title}</h2>
                <p>{Released} • {Runtime}</p>
                <p>{Genre}</p>
                <p>
                  <span className="text-yellow-400">★</span>
                  {imdbRating} IMDb rating
                </p>
              </div>
            </header>

            <section className="p-6">
              {!isWatched ? (
                <div className="flex flex-col gap-4 items-center justify-center mb-4 border border-yellow-500 p-3 rounded-2xl">
                  <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                  {
                    userRating && <button className='bg-slate-900 text-white p-3 rounded-2xl w-full' onClick={handleWatchedMovie}>+ Add to List</button>
                  }
                </div>
              ) : <h1 className='text-yellow-700 font-bold text-lg'>You have Watched and Already Rated this movie</h1>
              }
              <p className="text-slate-800 underline"><em>{Plot}</em></p>
              <p className="text-gray-700"><span className='font-bold text-yellow-500'>Starring by : </span>{Actors}</p>
              <p className="text-gray-700"><span className='font-bold text-yellow-500'>Directed by : </span>{Director} in <span className="italic">{Year}</span></p>
            </section>
          </div>
        }
      </div>
    </div>
  )
}

export default MovieDetails;
