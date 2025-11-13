import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyaddedcarCard from "./MyaddedcarCard";

const MyBooking = () => {
  const { user } = useContext(AuthContext); 
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; 

    fetch(`https://car-rent-server-blond.vercel.app/my_bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched bookings:", data);
        setMyCars(data.result || []);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user]);

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
      <h1 className="text-2xl font-bold mb-4 text-center">My Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {myCars.length > 0 ? (
          myCars.map((car) => <MyaddedcarCard key={car._id} car={car} />)
        ) : (
          <p className="text-center text-gray-500">No bookings found</p>
        )}
      </div>
    </div>
  );
};

export default MyBooking;


