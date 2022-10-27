import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container bg-red-600">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-ligh"> <span className="text-[#ff4500] text-7xl font-semibold">Learn</span> without limits</h1>
            <p className="mb-5 ">
            Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.
            </p>
              <div className="">
              <Link to="/login"><button className="btn bg-[#0056d2] my-2 mr-5 px-12 font-bold">Join For Free</button></Link>
              <Link to="/cources"><button className="btn bg-[#0056d2] px-12  font-bold">Get Courses</button></Link>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
