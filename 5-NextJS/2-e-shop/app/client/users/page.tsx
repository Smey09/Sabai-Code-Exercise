"use client";

import { useFetchData } from "@/app/api/client/FetchClientData";

export default function Users() {
  const { users } = useFetchData();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">User Client</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            className="bg-yellow-700 p-6 rounded text-white shadow-lg"
            key={user.id}
          >
            <p className="text-sm font-semibold">ID: {user.id}</p>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-lg"> username: @{user.username}</p>
            <p className="text-lg">Email: {user.email}</p>
            <h3 className="mt-4 text-xl font-semibold">User Address</h3>
            <p className="text-sm">{user.address.street}</p>
            <p className="text-sm">{user.address.suite}</p>
            <p className="text-sm">{user.address.city}</p>
            <p className="text-sm">{user.address.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
