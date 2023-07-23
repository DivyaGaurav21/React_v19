// CUSTOM HOOKS

import { useEffect, useState } from "react";

// IMDb API Key 
const KEY = "4cf53355";

export function useMovies(query) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // useEffect for fetching movie data 
    useEffect(() => {
        let fetchMovie = async () => {
            try {
                setIsLoading(true);
                setError("")
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
                if (!res.ok) throw new Error("Something went wrong !");
                const data = await res.json();
                if (data.Response === "False") throw new Error("Movie Not Found")
                setMovies(data.Search)
                setIsLoading(false);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

        fetchMovie();
    }, [query]);

    return { movies, isLoading, error }

}