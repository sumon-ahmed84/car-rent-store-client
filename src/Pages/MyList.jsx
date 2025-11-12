import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyaddedcarCard from "./MyaddedcarCard";


const MyList = () => {
  const { user } = use(AuthContext);
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my_cars?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCars(data.result);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
   <div className="max-w-7xl mx-auto px-4 py-6 mb-10">
    <h1 className="text-2xl font-bold mb-4 text-center">My Listed Cars</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        
      {myCars.map((car) => (
        <MyaddedcarCard key={car._id} car={car} />

      ))}
    </div>
   </div>
  );
};

export default MyList;
