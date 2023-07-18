import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main";
import Search from "./components/navbar/Search";
import Numresults from "./components/navbar/Numresults";
import Box from "./components/Box";
import MovieList from "./components/submoviecomp/MovieList";
import WatchedSummary from "./components/subwatchcomp/WatchedSummary";
import WatchedMovieList from "./components/subwatchcomp/WatchedMovieList"
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SelectedMovie from "./components/SelectedMovie";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];


const KEY = "4cf53355";

export default function App() {
  const [query, setQuery] = useState("avenger");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState("");
  const [selectedId , setSelectedId] = useState(null);
  

  function hanldeSelectMovie(id) {
    setSelectedId(selectid => selectid === id ? null : id);
  }

  function handleCloseMovie(){
    setSelectedId(null);
  }

  useEffect(()=>{
    let fetchMovie = async () => {
     try{
      setIsLoading(true);
      setError("")
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      if(!res.ok) throw new Error("Something went wrong !");
      const data = await res.json();
      if(data.Response === "False") throw new Error("Movie Not Found")
     setMovies(data.Search)
     setIsLoading(false);
     } catch(err){
      console.log(err.message);
      setError(err.message);
     }finally{
      setIsLoading(false);
     }
    }

    if(query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovie();
}, [query]);
  

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery}/>
        {movies && <Numresults movies={movies} />}
      </Navbar>
  
      <Main>
        <Box>
          {/* {isLoading ? <Loader/> : <MovieList movies={movies} />} */}
          {isLoading && <Loader/>}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={hanldeSelectMovie}/>}
          {error && <ErrorMessage message={error}/>}
        </Box>

        <Box>
          {
            selectedId ? <SelectedMovie selectedId={selectedId} onCloseMovie = {handleCloseMovie}/> :
             <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} />
            </>
          }
        </Box>


      </Main>

    </>
  );
}

