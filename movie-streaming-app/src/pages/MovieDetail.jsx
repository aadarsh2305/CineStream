import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <img src={movie.thumbnail} alt={movie.title} className="rounded-lg"/>
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-4">{movie.description}</p>
            <p className="mb-2">Genre: {movie.genre}</p>
            <p className="mb-2">Release Year: {movie.year}</p>
            <p className="mb-4">Duration: {movie.duration}</p>

            <div className="bg-black rounded-lg overflow-hidden">
              <video controls className="w-full h-auto">
                <source src={movie.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
