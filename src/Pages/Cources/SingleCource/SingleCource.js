import React from "react";
import { Link } from "react-router-dom";
import "./SingleCource.css";
import { FaStar, FaBookmark, FaShopify } from "react-icons/fa";

const SingleCource = ({ cource }) => {

  
  const {id, title, image, description, price, total_enrooled, rating } = cource;

  return (
    <div className="">
    
      <div className="card card-compact bg-base-100 shadow-xl cource-container">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="text-left">
            {description.length > 200 ? (
              <>
                {" "}
                {description.slice(0, 150) + "..."}
                <Link>Read More</Link>
              </>
            ) : (
              <>{description}</>
            )}
          </div>
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
          <Link to={`/cources/${id}` }><button className="btn bg-red-900 w-full border-0">Premium Access</button></Link>

        </div>
        
      </div>


    </div>
  );
};

export default SingleCource;
