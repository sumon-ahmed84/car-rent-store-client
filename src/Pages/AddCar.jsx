import React from "react";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      brand: e.target.category.value,
      price_per_day: e.target.price.value,
      location: e.target.location.value,
      provider_name: user.displayName,
      description: e.target.description.value,
      image: e.target.image.value,
      created_at: new Date(),
      contact_number: e.target.contact_number.value,
      seats: e.target.seats.value,
      status: "Available",
      fuel_type: "Petrol",
      transmission: "Automatic",
      email: user.email,
      rating: e.target.rating.value,
    };

    fetch("https://car-rent-server-blond.vercel.app/all_cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Car added successfully!",
          icon: "success",
          draggable: true,
        });
        console.log(data);
        e.target.reset();
        navigate("/browsecars");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add the car.");
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl my-8">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              readOnly
              defaultValue={user.displayName}
            />
          </div>
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="text"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              readOnly
              defaultValue={user.email}
            />
          </div>
          <div>
            <label className="label font-medium">Contact Number</label>
            <input
              type="text"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              name="contact_number"
              placeholder="Enter contact number"
              required
            />
          </div>
          <div>
            <label className="label font-medium">Seats</label>
            <input
              type="text"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              name="seats"
              placeholder="Enter number of seats"
              required
            />
          </div>
          <div>
            <label className="label font-medium">Car Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter car name"
            />
          </div>
          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="text"
              name="rating"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter car rating"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Sedan">Sedan</option>
              <option value="SUV"> SUV</option>
              <option value="Hatchback"> Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Price($/day)</label>
            <input
              type="text"
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter location"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* img URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
