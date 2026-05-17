import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Cast = () => {
    const {movieID} = useParams();
    const [actors, setActors] = useState([]);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {

        const fethCast = async () => {
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`);
                setActors(response.data.cast)
            } catch (err) {
                 console.log("Помилка при завантаженні списку акторів", err);
            }
        }

        if (movieID) fethCast();
    }, [movieID, API_KEY]);

    if (actors.length === 0) {
        return(
            <p>Немає інформації</p>
        )
    }

    return(
        <ul>
            {actors.map(({id, profile_path, name, character}) => (
                <li key={id} style={{ marginBottom: '15px', listStyle: 'none' }}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : "https://placehold.co/200x300?text=No+Image" 
            }
            alt={name}
            style={{ width: '100px', borderRadius: '5px' }}
          />
          <p style={{ fontWeight: 'bold', margin: '5px 0 0 0' }}>{name}</p>
          <p style={{ margin: '0', color: 'gray' }}>Character: {character}</p>
        </li>
            ))}
        </ul>
    )
};