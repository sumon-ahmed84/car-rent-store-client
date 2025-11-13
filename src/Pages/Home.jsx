import React, { useState } from "react";
import Slider from "../components/Banner/Slider";
import { useLoaderData } from "react-router";
import CarCards from "../components/CarCards";
import { IoLocationOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import Toprated from "../components/Toprated";
import car1 from "../assets/suv.png";
import car2 from "../assets/truck.png";
import car3 from "../assets/sedan.png";
import car4 from "../assets/luxurysedan.png";
import review1 from "../assets/thumb-image-1.png";
import review2 from "../assets/thumb-image-2.png";






const Home = () => {
  const data = useLoaderData();

  const initialCars = Array.isArray(data)
    ? data
    : data?.result ?? data?.cars ?? data?.data ?? [];

  const [cars, setcars] = useState(initialCars);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data)
          ? data
          : data?.result ?? data?.cars ?? data?.data ?? [];
        setcars(results);
        setLoading(false);
      });
  };

  return (
    <div>
      <Slider />

      {/* Featured Cars */}
      <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Featured Cars</h1>

        <form
          onSubmit={handleSearch}
          className="mt-5 mb-10 flex gap-2 justify-center"
        >
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
            {loading ? <div className="loader"></div> : "Search"}
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

      {/* Explore Car Types */}
      <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Explore Car Types
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img
              src={car1}
              className="w-full max-h-16"
              alt="SUV"
            />
            <p className="text-center">SUV</p>
          </div>

          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img
              src={car2}
              className="w-full max-h-16"
              alt="Sedan"
            />
            <p className="text-center">Sedan</p>
          </div>

          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img
              src={car3}
              className="w-full max-h-16"
              alt="Truck"
            />
            <p className="text-center">Truck</p>
          </div>

          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img
              src={car4}
              className="w-full max-h-16"
              alt="Luxury Sedan"
            />
            <p className="text-center">Luxury Sedan</p>
          </div>
        </div>
      </div>

          {/* Top rated car */}
          <Toprated></Toprated>

       

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left section */}
          <div>
            <span className="text-sm font-medium py-1 px-3 rounded-2xl bg-pink-500 text-white inline-block mb-2">
              We are the best
            </span>
            <p className="text-3xl font-bold">
              Explore the world with your own way of driving
            </p>
          </div>

          {/* Free Pick Up & Drop */}
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 duration-300 hover:shadow-lg">
            <div className="p-3 border bg-gray-50 rounded-xl w-12 h-12 flex items-center justify-center mb-3">
              <span className="text-2xl text-pink-500">
                <IoLocationOutline />
              </span>
            </div>
            <h2 className="text-base font-bold mb-1">Free Pick Up & Drop</h2>
            <p className="text-sm text-gray-600">
              Your convenience matters. Complimentary pick-up and drop-off
              service for your vehicle ensures a stress-free experience.
            </p>
          </div>

          {/* 24/7 Roadside Assistance */}
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 duration-300 hover:shadow-lg">
            <div className="p-3 border bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center mb-3">
              <span className="text-3xl text-pink-500">
                <BiSupport />
              </span>
            </div>
            <h2 className="text-base font-bold mb-1">
              24/7 Roadside Assistance
            </h2>
            <p className="text-sm text-gray-600">
              No matter the time or place, our 24/7 roadside assistance ensures
              you're never stranded. Drive confidently with support.
            </p>
          </div>
        </div>
      </div>

      {/* reveiw */}

      <div className="max-w-7xl mx-auto px-4 py-6 mb-10 ">
          <h1 className="font-bold text-2xl mb-6 text-center">Love From Clients</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className=" bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          {/* Profile and stars */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={review1} 
                alt="Jonathan Blue"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Jake jhon
                </h3>
                <p className="text-gray-500 text-sm">Manager</p>
              </div>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Testimonial text */}
          <p className="text-gray-600 italic leading-relaxed">
            “Great Value for Money! I rented a car from Carola, and I was pleasantly surprised by the value for money. The rates were competitive, and the quality.”
          </p>
        </div>
        <div className=" bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          {/* Profile and stars */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={review2}
                alt="Jonathan Blue"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Jonathan Blue
                </h3>
                <p className="text-gray-500 text-sm">Manager</p>
              </div>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Testimonial text */}
          <p className="text-gray-600 italic leading-relaxed">
            “Seamless Booking and Pickup! I rented a car from Carola, and the
            process was incredibly smooth. The online booking system is
            user-friendly, and the pickup was quick and efficient.”
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
