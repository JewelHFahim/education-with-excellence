import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const Signin = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { createUser, googleSignIn, facebookSignIn, profileUpdate } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const notify = () => toast.success('Signup Success!');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    if (password.length < 7) {
      setError("Password should be at least 7 charchter or more");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        updatingProfile(name, photoURL);
        notify();
        setError('')
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const hadnleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const updatingProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    profileUpdate(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className=" bg-base-200">
      <div className="hero h-100vh mx-auto">
        <div className="hero-content flex-col h-100vh pb-12 w-10/12">
          <div className="text-center lg:text-left ">
            <h1 className="text-3xl font-semibold">Create an Account</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                <p className="text-red-500 font-medium">{error}</p>
                <div className="form-control mt-6">
                  <button
                  
                    type="submit"
                    className="btn bg-red-900 hover:bg-red-700"
                  >
                    Sign In
                  </button>
                  
                </div>
              </form>
              <div className="divider">OR</div>
              <button
                onClick={hadnleGoogleSignIn}
                type="submit"
                className="btn bg-white text-slate-900 hover:bg-red-900 hover:text-white"
              >
                <FaGoogle className="mr-2 text-xl" />
                Google Sign In
              </button>
              <button
                onClick={handleFacebookSignIn}
                type="submit"
                className="btn bg-white text-slate-900 hover:bg-red-900 hover:text-white"
              >
                <FaFacebook className="mr-2 text-xl" />
                Facebook Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default Signin;
