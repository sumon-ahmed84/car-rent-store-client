import React, { useState } from "react";
import Slider from "../components/Banner/Slider";
import { useLoaderData } from "react-router";
import CarCards from "../components/CarCards";
import { IoLocationOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Home = () => {
  const data = useLoaderData();
  
  const initialCars = Array.isArray(data)
    ? data
    : data?.result ?? data?.cars ?? data?.data ?? [];

  const [cars, setModels] = useState(initialCars);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data) ? data : data?.result ?? data?.cars ?? data?.data ?? [];
        setModels(results);
        setLoading(false);
      });
  };

  return (
    <div>
      <Slider />

      {/* Featured Cars */}
      <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Featured Cars</h1>

        <form onSubmit={handleSearch} className="mt-5 mb-10 flex gap-2 justify-center">
          <label className="input rounded-full ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn btn-secondary rounded-full">
            {loading ? "Searching...." : "Search"}
          </button>
        </form>

        {cars.length === 0 ? (
          <p className="text-center text-gray-500">No cars available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cars.map((car) => (
              <CarCards key={car._id} car={car} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
