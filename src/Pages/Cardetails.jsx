import React, { use } from "react";
import { BsFillCartFill, BsFuelPump, BsPeopleFill } from "react-icons/bs";
import { IoIosSettings, IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Cardetails = () => {
  const data = useLoaderData();
  const promisdata = data.result,
    {
      transmission,
      fuel_type,
      seats,
      status,
      email,
      contact_number,
      image,
      name,
      description,
      price_per_day,
      provider_name,
    } = promisdata;
  const { user } = use(AuthContext);

  const handleBookNow = () => {
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...promisdata, boking_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Booking Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Link className="btn btn-outline" to="/browsecars">
        <IoMdArrowRoundBack /> Back
      </Link>
      <div className="max-w-4xl mx-auto  bg-white rounded-lg shadow-md my-8 relative">
        <img
          src={image}
          alt={name}
          className=" rounded-t-lg  object-cover mb-4  h-full w-full overflow-hidden"
        />
        <p className="text-lg rounded-lg bg-pink-400 text-white absolute top-4 right-4 p-2">
          {" "}
          {status}
        </p>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="text-lg mb-2">Description: {description}</p>
          <p className="text-lg mb-2">Price : ${price_per_day}/Day</p>
          <p className="text-lg mb-2">Provider: {provider_name}</p>
          <p className="text-lg mb-2">Contact: {contact_number}</p>
          <p className="text-lg mb-2">Email: {email}</p>
          <div className="flex justify-between my-4">
            <div className="flex items-center gap-1">
              <IoIosSettings />
              <span className="text-lg "> {transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <BsFuelPump />
              <span className="text-lg ">{fuel_type}</span>
            </div>
            <div className="flex items-center gap-1">
              <BsPeopleFill />
              <span className="text-lg ">{seats}</span>
            </div>
          </div>
          <button
            onClick={handleBookNow}
            className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardetails;
