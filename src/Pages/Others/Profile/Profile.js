import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const Profile = () => {
  const { user , profileUpdate} = useContext(AuthContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    // const password = form.password.value;
    console.log(displayName, photoURL);

    profileUpdate()
    .then(()=>{})
    .catch(()=>{})
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className="hero h-100vh mx-auto">
          <div className="hero-content flex-col h-100vh pb-12 w-10/12">
            <div className="text-center lg:text-left ">
              <h1 className="text-3xl font-semibold">Update Your Profile</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleUpdate}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="displayName"
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
                      defaultValue={user?.photoURL}
                      name="photoURL"
                      type="photoURL"
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
                      readOnly
                      defaultValue={user?.email}
                      required
                    />
                  </div>

                  {/* <div className="form-control">
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
                  </div> */}

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn bg-red-900 hover:bg-red-700"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
