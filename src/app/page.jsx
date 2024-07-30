"use client";

import React, { useEffect, useState } from "react";
import Results from "../Components/Results";

const API_KEY = "938c5aa757bcf6964e5fcede15b6cb97";
// if (!API_KEY) {
//   throw new Error("API_KEY environment variable is not set");
// }

const Home = ({ searchParams }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const genre = searchParams.genre || "fetchTrending";
      const url = `https://api.themoviedb.org/3${
        genre === "fetchTrending" ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Results results={movies} />
    </div>
  );
};

export default Home;
