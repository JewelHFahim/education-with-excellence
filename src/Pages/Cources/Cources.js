import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCource from "./SingleCource/SingleCource";
import "./Cources.css";
import { useLoaderData } from "react-router-dom";

const Cources = () => {

  const cources = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="flex w-11/12 mx-auto pt-5">

<div className="border border-slate-200  mx-5 min-w-fit max-h-screen p-2 rounded-lg">
  <h1 className="text-center text-xl py-2">All Categories</h1>
  
  {categories.map((category) => (
  <p key={category.id}>
    <Link to={`/category/${category.id}`}>{category.name}</Link>
  </p>
))}
  
</div>

<div className="">
  <div className="min-h-screen bg-base-100 grid grid-cols-3 mb-10 gap-5">
    {cources.map((cource) => (
      <SingleCource key={cource.id} cource={cource}></SingleCource>
    ))}
  </div>
</div>
</div>
    </div>
  );
};

export default Cources;