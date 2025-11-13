import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUser({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        alert("Error updating profile: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
        <main>
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          My Profile
        </h2>

        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md mb-3"
          />
          <h3 className="text-xl font-semibold">{user?.displayName || "User"}</h3>
          <p className="text-gray-600 text-sm">{user?.email}</p>
        </div>

        <hr className="my-4 border-gray-200" />

        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          Edit Profile
        </h3>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
    </main>
    </div>
  );
};

export default Profile;
