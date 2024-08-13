"use client";
import Pagination from "@/app/components/Organisms/Paginations";
import React from "react";
import NevBar from "../NevBar";
import Footer from "../Footer";
import Iframe from "@/app/components/Iframe";
import CartProduct from "@/app/components/CardProduct";

const mockProducts = [
  {
    id: "1",
    name: "iPhone 16 Pro Max",
    model: "A2988",
    brand: "Apple",
    price: 1199.99,
    description:
      "Apple's flagship smartphone with advanced A17 Bionic chip and ProMotion display.",
    about:
      "The iPhone 16 Pro Max delivers top-tier performance, enhanced camera capabilities, and a stunning Super Retina XDR display.",
    image: "https://tech.news.am/static/news/b/2024/01/2786.jpg",
  },
];

const Doc = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-400">
      <div className="bg-indigo-400 p-4 rounded-xl text-black m-2">
        <p>NevBar</p>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
          <NevBar />
        </div>
      </div>
      <div className="bg-indigo-400 p-4 rounded-xl text-black m-2">
        <p>Footer Page</p>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
          {" "}
          <Footer />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-[30%] mr-4 bg-indigo-400 p-5 rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-xl font-bold mb-2 py-5">Card Products</h2>
          <ul>
            {mockProducts.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <div className="w-[30%] bg-indigo-400 p-5 rounded-xl hover:bg-blue-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <h1 className="text-xl font-bold">Button Paginations</h1>
          <Pagination total={1} limit={1} />
        </div>
      </div>
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Iframe</h2>
        <Iframe />
      </section>
    </div>
  );
};

export default Doc;
