
import React from "react";
import { useLoaderData } from "react-router";
import CarCards from "../components/CarCards";

const BrowseCars = () => {
  const data = useLoaderData();

  const cars = Array.isArray(data) ? data : data?.cars ?? data?.data ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Browse Cars</h1>

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
  );
};

export default BrowseCars;









// import React from "react";
// import { useLoaderData } from "react-router";
// import CarCards from "../components/CarCards";

// const BrowseCars = () => {
//   const data = useLoaderData();

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Browse Cars</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//         {data.map((car) => (

//           <CarCards key={car._id} car={car}></CarCards>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseCars;
