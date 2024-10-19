import React from "react";
import { movies } from "../data/movies";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Movie List
          <span className="text-yellow-500 font-semibold text-base px-1 rounded">
            (This is a sample 2 movie list because of storage issue
          </span>
          <span className="text-red-400 font-semibold text-base px-1 rounded">
            but you can watch the first movie just click : 
          </span>
          <span className="bg-indigo-700 text-white font-semibold text-base px-1 rounded">
            Watch Now
          </span>
          <span className="text-yellow-500 font-semibold text-base px-1 rounded">
            )
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-sm mb-2">{movie.genre}</p>
              <p className="text-sm mb-4">
                {movie.year} · {movie.duration}
              </p>
              <Link
                to={`/movies/${movie.id}`}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Watch Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
