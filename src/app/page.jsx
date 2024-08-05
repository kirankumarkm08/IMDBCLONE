"use client";

import React, { useEffect, useState } from "react";
import Results from "../Components/Results";
import SearchBox from "@/Components/SearchBox";

const API_KEY = "938c5aa757bcf6964e5fcede15b6cb97";

const Home = ({ searchParams }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const genre = searchParams?.genre || "fetchTrending";
      const url = `https://api.themoviedb.org/3${
        genre === "fetchTrending" ? `/trending/all/week` : `/movie/top_rated`
      }?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        const results = data.results;
        console.log(results);
        setMovies(results);
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
      <Results results={movies} />;
    </div>
  );
};

export default Home;
