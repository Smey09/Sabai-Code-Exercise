// app/posts/page.tsx

import { fetchPosts } from "@/app/api/server/FetchServerData";
import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Posts Server</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <div
            className="bg-white p-6 rounded text-white shadow-lg"
            key={post.id}
          >
            <h2 className="text-2xl font-bold text-blue-600">{post.title}</h2>
            <p className="text-lg text-black">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
