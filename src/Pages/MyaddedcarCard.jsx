import React, { use, useRef } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const MyaddedcarCard = ({ car }) => {
  const {
    _id,
    image,
    name,
    seats,
    brand,
    location,
    rating,
    description,
    price_per_day,
    provider_name,
    contact_number,
    status,
  } = car;
  const { user } = use(AuthContext);

  const bidModalref = useRef(null);

  const handleModalopen = () => {
    bidModalref.current.showModal();
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      brand: e.target.category.value,
      price_per_day: e.target.price.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      contact_number: e.target.contact_number.value,
      seats: e.target.seats.value,
      rating: e.target.rating.value,
    };

    fetch(`http://localhost:3000/all_cars/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
        bidModalref.current?.close();
      })
      .catch((err) => {
        console.error("Update failed:", err);
        toast.error("Failed to update car: " + err.message);
      });
  };


  return (
    <div>
      <dialog ref={bidModalref} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="font-bold text-2xl">Update Car Details</h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
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
                  defaultValue={contact_number}
                />
              </div>
              <div>
                <label className="label font-medium">Seats</label>
                <input
                  type="text"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  name="seats"
                  defaultValue={seats}
                />
              </div>
              <div>
                <label className="label font-medium">Car Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={name}
                />
              </div>
              <div>
                <label className="label font-medium">Rating</label>
                <input
                  type="text"
                  name="rating"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={rating}
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="label font-medium">Category</label>
                <select
                  defaultValue={brand}
                  name="category"
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
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={price_per_day}
                />
              </div>

              <div>
                <label className="label font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={location}
                />
              </div>

              {/* Description Textarea */}
              <div>
                <label className="label font-medium">Description</label>
                <textarea
                  name="description"
                  rows="3"
                  className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                  defaultValue={description}
                ></textarea>
              </div>

              {/* img URL */}
              <div>
                <label className="label font-medium">Image URL</label>
                <input
                  type="url"
                  name="image"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={image}
                />
              </div>

              <button className="btn rounded-md bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white btn-sm">
                Submit
              </button>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="h-full rounded-2xl card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-90 transition-transform duration-300 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl "
        />
        <p className="text-lg rounded-lg bg-pink-400 text-white absolute top-4 right-4 p-2">
          {status}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="badge text-xs badge-xs badge-secondary rounded-full">
            ${price_per_day}/day
          </div>
          <div className="text-xs text-secondary">{provider_name}</div>
          <p className="line-clamp-1">{description}</p>

          <div className="flex gap-2 justify-between items-center mt-4">
            <Link
              onClick={handleModalopen}
              className="btn rounded-md bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white btn-sm"
            >
              Update
            </Link>
            <Link className="btn rounded-md bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white btn-sm">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyaddedcarCard;
