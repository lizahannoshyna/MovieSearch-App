import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}`,
        );
        setReviews(response.data.results);
      } catch (err) {
        console.log("Помилка при завантаженні відгуків", err);
      }
    };

      if (movieID) fetchReviews();
  }, [movieID, API_KEY]);

  if (reviews.length === 0) return <p>Немає інформації</p>;

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id} style={{ marginBottom: "20px" }}>
          <h4 style={{ margin: "0 0 5px 0" }}>Author: {author}</h4>
          <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.4" }}>
            {content}
          </p>
        </li>
      ))}
    </ul>
  );
};
