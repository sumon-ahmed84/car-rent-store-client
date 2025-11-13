import React from "react";
import { Link } from "react-router";

const CarCards = ({ car }) => {
  const { _id, image, name, description, price_per_day, provider_name,rating } = car;
  return (
    <div className=" card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-full w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
          <div className="badge text-xs badge-xs badge-secondary rounded-full">
          ${price_per_day}/day
        </div>
        <span>Rating :{rating}</span>
        </div>
        <div className="text-xs text-secondary">{provider_name}</div>
        <p className="line-clamp-1">{description}</p>

        <div className="card-actions justify-between items-center mt-4">
          <Link
            to={`/cardetails/${_id}`}
            className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
