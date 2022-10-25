import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const Signin = () => {

    const {createUser} = useContext(AuthContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error =>{
        console.error(error);
    })

  };

  return (
    <div className=" bg-base-200 mb-[-25px]">
      <div className="hero max-h-screen mx-auto">
        <div className="hero-content flex-col h-100vh pb-12 w-10/12">
          <div className="text-center lg:text-left ">
            <h1 className="text-3xl font-semibold">Create an Account</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">
                    Already have an account?{" "}
                    <span className="text-orange-600 font-bold">Login</span>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-red-900 hover:bg-red-700">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
