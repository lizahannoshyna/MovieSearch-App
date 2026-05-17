import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get('query') || '';

    const [inputValue, setInputValue] = useState(query);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect (() => {

        if(!query) {
            setMovies([]);
            return;
        }

        const fetchSearchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
                setMovies(response.data.results);
            } catch(err) {
                console.log("Помилка при завантаженні", err);
            }

        }
        fetchSearchMovies();
    }, [query, API_KEY]);

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedValue = inputValue.trim();

    if (trimmedValue === "") {
      setSearchParams({}); 
      return;
    }

    setSearchParams({ query: trimmedValue });
  };

    return (
        <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search movies..."
        />
        <button
          type="submit"
        >
          Search
        </button>
      </form>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id} style={{ marginBottom: "8px" }}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}

      {query && movies.length === 0 && (
        <p>No movies found for "{query}".</p>
      )}
    </div>
    )
}