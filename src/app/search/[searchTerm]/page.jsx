"use client";
import React from "react";
import { useEffect, useState } from "react";
import Results from "@/Components/Results";

const API_KEY = "938c5aa757bcf6964e5fcede15b6cb97";

const searchTerm = (params) => {
  const searchTerm = params.searchTerm;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getSearch = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      try {
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setMovies(data.result);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSearch();
  }, []);
  return (
    <div>
      {movies.map((items) => (
        <Results key={items.id} results={items} />
      ))}
    </div>
  );
};

export default searchTerm;
