"use client";

import { useFetchData } from "@/app/api/client/FetchClientData";

export default function Posts() {
  const { posts } = useFetchData();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts Client</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
