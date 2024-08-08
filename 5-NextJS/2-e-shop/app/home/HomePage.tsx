"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const My_URL = "http://localhost:3000";

  const getPostClient = `${My_URL}/client/posts`;
  const getUserClient = `${My_URL}/server/users`;

  const getUserServer = `${My_URL}/server/users`;
  const getPostServer = `${My_URL}/server/posts`;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
                Client Component
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
                Server Component
              </option>
              <option value={getUserServer}>Get Users</option>
              <option value={getPostServer}>Get Posts</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
