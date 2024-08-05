"use client";
import React from "react";
import { useEffect, useState } from "react";
import Results from "@/Components/Results";

const API_KEY = "938c5aa757bcf6964e5fcede15b6cb97";

export default function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function search() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
      );
      const data = await res.json();
      const results = data.results;
      setResults(results.data);
      console.log(results);
    }
    search();
  }, []);

  return <div>{results && <Results results={results} />}</div>;
}
