import React from 'react';
import { Link } from 'react-router';

const MyaddedcarCard = ({ car }) => {
    const { _id, image, name, description, price_per_day, provider_name,status } = car;
  return (
    <div className=" rounded-2xl card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300 relative">
      
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl "
        />
      <p className="text-lg rounded-lg bg-pink-400 text-white absolute top-4 right-4 p-2">{status}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge text-xs badge-xs badge-secondary rounded-full">
          ${price_per_day}/day
        </div>
        <div className="text-xs text-secondary">{provider_name}</div>
        <p className="line-clamp-1">{description}</p>

        <div className="flex gap-2 justify-between items-center mt-4">
          <Link className="btn rounded-md bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white btn-sm">Update</Link>
          <Link className="btn rounded-md bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white btn-sm">Delete</Link>
        </div>
      </div>
    </div>
  );
};

export default MyaddedcarCard;