import React from "react";
import Slider from "../components/Banner/Slider";
import { useLoaderData } from "react-router";
import CarCards from "../components/CarCards";

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
          <h1 className="text-2xl font-bold mb-2 text-center">Explore Car Types</h1>
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
              <img src="/src/assets/luxurysedan.png" className="w-full max-h-16" />
              <p className="text-center">Luxury Sedan</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-6 mb-10">

            <h1 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h1>
            <div>
              
            </div>

          </div>
        </div>

    </div>
    
  );
};

export default Home;
