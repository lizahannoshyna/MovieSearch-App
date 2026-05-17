import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const MovieDetails = () => {
    const {movieID} = useParams();

    const [movie, setMovie] = useState(null); 
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
        const fetchMovieInfo = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
                );
                setMovie(response.data); 
            } catch (err) {
                console.log("Помилка при завантаженні", err);
            }
        };

        if (movieID) {
            fetchMovieInfo();
        }
    }, [movieID, API_KEY]);

    if (!movie) return <p>Завантаження ...</p>


    return(
        <>
        <Link to='/movies'>Go back</Link>
        <div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <img 
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
          alt={movie.title} 
        />
        <div>
          <h2>{movie.title} ({movie.release_date.split('-')[0]})</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(g => g.name).join(', ')}</p>
        </div>
      </div>
      <hr />
      <nav>
         <Link to="cast">Cast</Link> | <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet /> 
    </div>
        </>
    )
}