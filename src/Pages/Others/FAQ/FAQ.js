import React from "react";

const FAQ = () => {
  return (
    <div className=" min-h-screen bg-base-100">
        <div className="w-9/12 mx-auto mt-12 shadow-lg">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box mt-2"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default FAQ;
