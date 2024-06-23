"use client";

import React, { useEffect, useState } from "react";

const API_KEY = "938c5aa757bcf6964e5fcede15b6cb97";

const Home = ({ searchParams }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const genre = searchParams.genre || "fetchTrending";
      const url = `https://api.themoviedb.org/3${
        genre === "fetchTrending" ? `/trending/all/week` : `/movie/top_rated`
      }?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchParams]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
