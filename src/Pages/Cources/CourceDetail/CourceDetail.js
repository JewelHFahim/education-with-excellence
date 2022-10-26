import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaBookmark, FaShopify } from "react-icons/fa";


const CourceDetail = () => {
  const course = useLoaderData();

  const {id, title, image, description, price, total_enrooled, rating } = course;


  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="w-9/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            style={{ width:'500px', height: '350px' }}
            className=" max-w-sm rounded-lg shadow-2xl"
            alt=""/>
          <div className="text-center">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="py-6 text-left">{description}</p>
            <div className="mt-2 flex justify-around ">
            <div className="icons">
            <FaShopify className="text-green-600"/>
            <p className="ml-1">Price: {price}$</p>
            </div>
            <div className="icons">
            <FaBookmark className="text-red-900"/>
            <p className="ml-1">Enrolled: {total_enrooled}</p>
            </div>
            <div className="icons">
            <FaStar className="text-yellow-600"/>
            <p className="ml-1">Rating: {rating}</p>
            </div>
          </div>
            <button className="btn btn-primary mt-4">Download PDF</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourceDetail;
