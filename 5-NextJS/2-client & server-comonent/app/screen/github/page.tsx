"use client";

import {
  fetchPaginatedMovies,
  fetchMovieDetails,
} from "@/app/api/Github/Github";
import { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const MoviesPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [moviesError, setMoviesError] = useState<string | null>(null);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchPaginatedMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setMoviesError("Error fetching movies");
      }
    };
    loadMovies();
  }, [page]);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const movieId = 157336; // Example movie ID
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setDetailsError("Error fetching movie details");
      }
    };
    loadMovieDetails();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      {moviesError && <p className="text-red-500">{moviesError}</p>}
      {detailsError && <p className="text-red-500">{detailsError}</p>}

      {movieDetails && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Featured Movie</h2>
          <img
            src={movieDetails.poster_path}
            alt={movieDetails.title}
            className="w-full h-64 object-cover"
          />
          <h3 className="text-lg font-semibold">{movieDetails.title}</h3>
          <p>{movieDetails.overview}</p>
          <p className="text-yellow-500 font-semibold">
            Rating: {movieDetails.vote_average}/10
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 transition"
          >
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-500 mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-700 mb-2">
                Release Date: {movie.release_date}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                {movie.overview.length > 100
                  ? movie.overview.substring(0, 100) + "..."
                  : movie.overview}
              </p>
              <p className="text-yellow-500 font-semibold">
                Rating: {movie.vote_average}/10
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;
