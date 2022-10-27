import React from "react";
import Pdf from "react-to-pdf";

import { useLoaderData } from "react-router-dom";
import { FaStar, FaBookmark, FaShopify } from "react-icons/fa";

const CourceDetail = () => {
  const course = useLoaderData();
  const ref = React.createRef();

  const { title, image, description, price, total_enrooled, rating } = course;

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="App">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-primary " onClick={toPdf}>
              Download PDF
            </button>
          )}
        </Pdf>
              {/* MOdal Section */}
        <label htmlFor="my-modal-6" className="btn modal-button ml-5">Check Out</label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">

            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{price}$</p>
            <p><FaStar className="text-yellow-600"/>{rating}</p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
        {/* Modal Section End */}



        <div className="w-7/12 mx-auto" ref={ref}>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image}
              style={{ width: "500px", height: "350px" }}
              className=" max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div className="text-center">
              <h1 className="text-4xl font-semibold">{title}</h1>
              <p className="py-6 text-left">{description}</p>
              <div className="mt-2 flex justify-around ">
                <div className="icons">
                  <FaShopify className="text-green-600" />
                  <p className="ml-1">Price: {price}$</p>
                </div>
                <div className="icons">
                  <FaBookmark className="text-red-900" />
                  <p className="ml-1">Enrolled: {total_enrooled}</p>
                </div>
                <div className="icons">
                  <FaStar className="text-yellow-600" />
                  <p className="ml-1">Rating: {rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceDetail;
