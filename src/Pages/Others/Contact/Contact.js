import React from "react";
import { FaMapMarked, FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="w-9/12 mx-auto text-5xl text-center mt-8">
        <p>Contact Us</p>
      </div>

      <div className="grid grid-cols-3 gap-5 w-9/12 mx-auto mt-5">
        <div className="card  bg-base-100 shadow-xl border border-slate-200 p-2 m-5  items-center">
          <FaMapMarked className="text-8xl text-orange-900" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Address</h2>
            <p>228-5 Main Street, Georgia, USA</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl border border-slate-200 p-2 m-5  items-center">
          <FaEnvelopeOpenText className="text-8xl text-orange-900" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Email Address</h2>
            <p>contact@educavo.com</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl border border-slate-200 p-2 m-5  items-center">
          <FaPhoneAlt className="text-8xl text-orange-900" />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Phone Number</h2>
            <p>(+01)999-999-4444</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
