import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
        );
        setMovies(response.data.results);
      } catch (err) {
        console.log("Помилка при завантаженні", err);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <>
      <h1 className="text-center text-xl
">Trending today</h1>
      <ul>
        {movies.map((movie) => (
          <li className="" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
