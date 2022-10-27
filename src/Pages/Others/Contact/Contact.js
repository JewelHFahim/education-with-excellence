import React from "react";
import {
  FaMapMarked,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="w-9/12 mx-auto text-5xl text-center mt-8">
        <p>Contact Us</p>
      </div>
      <div className="divider">with</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-9/12 mx-auto mt-5">
        <div className="card  bg-base-100 shadow-xl border border-slate-200 p-2 m-5  items-center">
          <FaMapMarked className="text-8xl text-[#FF5349]" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Address</h2>
            <p>228-5 Main Street, Georgia, USA</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl border border-slate-200 p-2 m-5  items-center">
          <FaEnvelopeOpenText className="text-8xl text-[#FF5349]" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Email Address</h2>
            <p>contact@educavo.com</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl border border-slate-200 p-2 m-5  items-center">
          <FaPhoneAlt className="text-8xl text-[#FF5349]" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Phone Number</h2>
            <p>(+01)999-999-4444</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 w-9/12 mx-auto p-8 my-5 text-center lg:flex justify-around ">
        <div className="flex items-center">
          <FaMailBulk  className="text-6xl mr-2 text-[#FF5349]"/>
          <p className="text-white text-4xl my-2"> Subscribe to Newsletter</p>
        </div>
        <input
          className="input input-bordered input-success w-full max-w-xs"
          type="email"
          placeholder="Email"
        />
      </div>
    </div>
  );
};

export default Contact;
