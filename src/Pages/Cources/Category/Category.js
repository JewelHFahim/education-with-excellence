import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Category = () => {
  const categories = useLoaderData();

  return (
    <div className="min-h-screen w-9/12 mx-auto mt-8">
      <h1 className="text-4xl text-center tex-slate-600 font-semibold mb-5">There are {categories.length} Categories</h1>

      <div className="grid grid-cols-3 gap-5 ">
        {categories.map((ct) => (
          <div className="">
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img style={{ height: '250px' }} src={ct.image} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="card-title">{ct.title}</h2>
                <div className="card-actions absolute bottom-4">
                  <Link to='/cources'><button className="btn btn-primary">All Course</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
