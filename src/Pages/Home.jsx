import React from "react";
import Slider from "../components/Banner/Slider";
import { useLoaderData } from "react-router";
import CarCards from "../components/CarCards";
import { IoLocationOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Home = () => {
  const data = useLoaderData();
  const cars = data.result;
  return (
    <div>
      <Slider />
      <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Featured Cars</h1>

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img src="/src/assets/suv.png" className="w-full max-h-16" />
            <p className="text-center">SUV</p>
          </div>
          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img src="/src/assets/sedan.png" className="w-full max-h-16" />
            <p className="text-center">Sedan</p>
          </div>
          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img src="/src/assets/truck.png" className="w-full max-h-16" />
            <p className="text-center">Truck</p>
          </div>
          <div className="rounded shadow p-6 w-full hover:scale-105 duration-300 hover:shadow-lg">
            <img
              src="/src/assets/luxurysedan.png"
              className="w-full max-h-16"
            />
            <p className="text-center">Luxury Sedan</p>
          </div>
        </div>
      </div>


      {/* Why Choose Us */}

      <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
        
        <h1 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div>
            <span className="text-2xl font-sm py-1 px-2 rounded-2xl bg-pink-500 text-white ">We are the best</span>
            <p className="text-3xl font-bold my-4">
              Explore the world with your own way of driving
            </p>
          </div>
          <div className=" p-6 shadow-2xl rounded-xl hover:scale-105 duration-300 hover:shadow-lg">
            <div className="p-10 border bg-gray-50 rounded-xl w-12 h-12 flex items-center justify-center mb-2">
              <span className="text-2xl">
                <IoLocationOutline />
              </span>
            </div>
            <h2 className="text-sm font-bold">Free Pick Up & Drop</h2>
            <p>
              Your convenience matter. Complimentary pick-up and drop-off
              service for any your vehicle, a stress-free experience.
            </p>
          </div>
          <div className=" p-6 shadow-2xl rounded-xl hover:scale-105 duration-300 hover:shadow-lg">
            <div className="p-10 border bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center mb-2">
              <span className="  text-3xl">
                <BiSupport />
              </span>
            </div>
            <h2 className="text-sm font-bold">24/7 Roadside Assistance</h2>
            <p>
              No matter the time or place, and our 24/7 roadside assistance
              ensures you're never stranded. Drive confidently with support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
