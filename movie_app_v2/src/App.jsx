import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Main";
import Logo from "./components/NavBar/Logo";
import Search from "./components/NavBar/Search";
import NumResults from "./components/NavBar/NumResults";
import MovieList from "./components/ListBox/MovieList";
import WatchedSummary from "./components/WatchedBox/WatchedSummary";
import WatchedMovieList from "./components/WatchedBox/WatchedMovieList";
import ReusableBox from "./components/ReusableBox";
import MovieDetails from "./components/MovieDetails";

// import StarRating from "./components/WatchedBox/StarRating";


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


// IMDb API Key 
const KEY = "4cf53355";
// const tempQuery = "thor";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("thor");
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedId, setSelectedId] = useState(null);


  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        if (!res.ok) throw new Error("something went wrong");
        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

    }
    fetchMovie();
  }
    , [query]);

  const handleCloseMovieDetails = () => {
    setSelectedId(null);
  }

  const movieDetailsHandler = (id) => {
    setSelectedId(id === selectedId ? null : id);
  }

  const handleWatchedMovie = (movie) => {
    setWatched(watched => [...watched, movie]);
  }

  const handleDeleteWatchedMovie = (id) => {
    const afterDeleted = watched.filter(movie => movie.imdbID !== id);
    setWatched(afterDeleted);
  }

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main >
        <ReusableBox>
          {/* {isLoading ? "LOADING..." : <MovieList movies={movies} />} */}
          {isLoading && "LOADING..."}
          {!isLoading && !error && <MovieList movies={movies} movieDetailsHandler={movieDetailsHandler} />}
          {error && `ERROR COMPONENT--> ${error}`}
        </ReusableBox>
        <ReusableBox>
          {selectedId ?
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovieDetails}
              onAddWatched={handleWatchedMovie}
              watched={watched}
            /> : <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteMovie={handleDeleteWatchedMovie}
              />
            </>}
        </ReusableBox>
        {/* <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox >
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </WatchedBox> */}
      </Main>
    </>
  );
}




// const App = () => {
//   const [rating , setRating] = useState(0);
//   return (
//     <div>
//       <StarRating defaultRating={rating} onSetRating={setRating} size={24} color="red"/>
//     </div>
//   )
// }

// export default App