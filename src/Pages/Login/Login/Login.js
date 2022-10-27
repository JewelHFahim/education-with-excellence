import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "./Login.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState();
  const { logIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


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
        form.reset();
        navigate(from, {replace: true});
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
        navigate(from, {replace: true});
      })
      .then((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleFacebookSignIn = () =>{
    facebookSignIn(facebookProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
    })
    .catch( error =>{
      console.error(error);
      setError(error.message);
    })
  }

  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen bg-base-200 pb-20 pt-8">
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
                <p className="text-red-500 font-medium">{error}</p>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-red-900">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider">OR</div>
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
