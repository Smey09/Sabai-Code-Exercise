"use client";

import { useEffect, useState } from "react";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export function useFetchData() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          fetch(`${BASE_URL}/posts`).then((res) => res.json()),
          fetch(`${BASE_URL}/users`).then((res) => res.json()),
        ]);
        setPosts(postsResponse);
        setUsers(usersResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return { users, posts };
}
