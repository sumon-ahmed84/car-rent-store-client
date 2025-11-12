import React from "react";
import { useLoaderData } from "react-router";

const UpdateCar = () => {
  const data = useLoaderData();
  const promisdata = data.result;

  console.log(promisdata);

  //     {
  //       transmission,
  //       fuel_type,
  //       seats,
  //       status,
  //       email,
  //       contact_number,
  //       image,
  //       name,
  //       description,
  //       price_per_day,
  //       provider_name,
  //     } = promisdata;
  //   const { user } = use(AuthContext);

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    // <div>
    //     <dialog
    // //   ref={bidModalref}
    //   className="modal modal-bottom sm:modal-middle"
    // >
    //   <div className="modal-box">
    //     <h3 className="font-bold text-lg">
    //       Give Seller Your Offered Price
    //     </h3>
    //     <form >
    //       <fieldset className="fieldset">
    //         <label className="label">Name</label>
    //         <input type="text" className="input"
    //             name="name"
    //         readOnly
    //         // defaultValue={}
    //         />

    //         <label className="label">Email</label>
    //         <input
    //           type="email"
    //           className="input"
    //             name="email"
    //           readOnly
    //         //   defaultValue={}
    //         />
    //         <label className="label">Bid</label>
    //         <input type="text" className="input"
    //             name="bid"
    //         placeholder="Your Bid"
    //          />

    //         <button className="btn btn-neutral mt-4">Place your Bid</button>
    //       </fieldset>
    //     </form>
    //     <div className="modal-action">
    //       <form method="dialog">
    //         {/* if there is a button in form, it will close the modal */}
    //         <button className="btn">Close</button>
    //       </form>
    //     </div>
    //   </div>
    // </dialog>
    // </div>
  );
};

export default UpdateCar;
