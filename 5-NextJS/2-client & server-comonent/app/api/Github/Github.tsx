const BASE_URL = "https://github.com/Smey09/Fake-data-for-testing/blob/main/";
const FILE_NAME = "fake-data.json";

const MAIN_URL = `${BASE_URL}${FILE_NAME}`;

export const fetchPaginatedMovies = async (page: number) => {
  try {
    const response = await fetch(MAIN_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return {
      results: data.movies.slice((page - 1) * 10, page * 10),
      total_pages: Math.ceil(data.movies.length / 10),
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await fetch(MAIN_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    const movie = data.movies.find((m: any) => m.id === movieId);
    return movie || null;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
