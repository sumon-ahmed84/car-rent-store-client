import React from 'react';
import { useLoaderData } from 'react-router';
import CarCards from './CarCards';

const Toprated = () => {
    const data=useLoaderData();
    console.log(data);
    const cars=data.result
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Top Rated Cars</h1>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cars.map((car) => (
            <CarCards key={car._id} car={car} />
          ))}
        </div>
      
    </div>
  );
};

export default Toprated;