"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const My_URL = "http://localhost:3000/";

  const getPostClient = `${My_URL}screen/client/posts`;
  const getUserClient = `${My_URL}screen/client/users`;

  const getUserServer = `${My_URL}screen/server/users`;
  const getPostServer = `${My_URL}screen/server/posts`;

  const getMoviesTMDBClient = `${My_URL}screen/movies`;
  const getMoviesGithubClient = `${My_URL}screen/github`;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    // Log the selected value for debugging
    console.log("Selected Value:", selectedValue);

    if (selectedValue) {
      // Add a condition to ensure the selected value is a valid URL or path
      if (selectedValue.startsWith(My_URL)) {
        router.push(selectedValue);
      } else {
        console.error("Invalid URL or path selected:", selectedValue);
      }
    }
  };

  return (
    <div className="flex bg-green-200 items-center justify-center min-h-screen">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Home Page</h1>
        <div className="space-y-4">
          <div className="bg-blue-500 p-4 rounded-lg text-white text-center shadow-md">
            <div className="text-lg font-semibold mb-2">Client Component</div>
            <select
              id="client-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleSelectChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Client Component
              </option>
              <option value={getUserClient}>Get Users</option>
              <option value={getPostClient}>Get Posts</option>
            </select>
          </div>
          <div className="bg-blue-500 p-4 rounded-lg text-white text-center shadow-md">
            <div className="text-lg font-semibold mb-2">Server Component</div>
            <select
              id="server-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleSelectChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Server Component
              </option>
              <option value={getUserServer}>Get Users</option>
              <option value={getPostServer}>Get Posts</option>
            </select>
          </div>
          <div className="bg-blue-500 p-4 rounded-lg text-white text-center shadow-md">
            <div className="text-lg font-semibold mb-2">Movies Component</div>
            <select
              id="movies-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleSelectChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Movies Component
              </option>
              <option value={getMoviesTMDBClient}>Get TMDB Movies</option>
              <option value={getMoviesGithubClient}>Get Github Movies</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
