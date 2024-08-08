// app/users/page.tsx

import { fetchUsers } from "@/app/api/server/FetchServerData";
import React from "react";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">User Server</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: User) => (
          <div
            className="bg-white hover:bg-gray-200 p-6 rounded text-blue-700 shadow-lg"
            key={user.id}
          >
            <p className="text-sm font-semibold">ID: {user.id}</p>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-lg"> username: @{user.username}</p>
            <p className="text-lg">Email: {user.email}</p>
            <h3 className="mt-4 text-xl font-semibold">User Address</h3>
            <p className="text-sm">
              st.{user.address.street}, {user.address.suite}
            </p>
            <p className="text-sm"> City : {user.address.city}</p>
            <p className="text-sm">Zipcode : {user.address.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
