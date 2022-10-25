import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "./Login.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const { logIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
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
      });
  };

  const handleFacebookSignIn = () =>{
    facebookSignIn(facebookProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch( error =>{
      console.error(error);
    })
  }

  return (
    <div className="bg-base-200">
      <div className="hero max-h-screen bg-base-200 pb-20 pt-8">
        <div className="hero-content flex-col w-10/12">
          <div className="text-center lg:text-left ">
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
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
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link
                      to="/signin"
                      className="label-text-alt link link-hover"
                    >
                      Dont have an account?{" "}
                      <span className="text-orange-700">Sign In</span>
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-red-900">
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={hadnleGoogleSignIn}
                type="submit"
                className="btn bg-white mt-2 text-slate-900 hover:bg-red-900 hover:text-white"
              >
                <FaGoogle className="mr-2 text-xl" />
                Google Login
              </button>
              <button
                onClick={handleFacebookSignIn}
                type="submit"
                className="btn bg-white text-slate-900 hover:bg-red-900 hover:text-white"
              >
                <FaFacebook className="mr-2 text-xl" />
                Facebook Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
