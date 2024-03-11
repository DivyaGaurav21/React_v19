import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Main";
import Logo from "./components/NavBar/Logo";
import Search from "./components/NavBar/Search";
import NumResults from "./components/NavBar/NumResults";
import MovieList from "./components/ListBox/MovieList";
import WatchedSummary from "./components/WatchedBox/WatchedSummary";
import WatchedMovieList from "./components/WatchedBox/WatchedMovieList";
import ReusableBox from "./components/ReusableBox";

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

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main >
        <ReusableBox>
          <MovieList movies={movies} />
        </ReusableBox>
        <ReusableBox>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
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