"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
const api = "938c5aa757bcf6964e5fcede15b6cb97";
export default async function MoviePage({ params }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getImage = async () => {
      const movieId = params.id;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}`
      );
      try {
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    getImage();
  }, []);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={200}
          className="rounded-lg"
          alt={movie.title || movie.name}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
