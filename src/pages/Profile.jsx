import React from "react";
import MyordersPage from "./MyordersPage";

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* LEFT SIDE - Profile Card */}
        <div className="w-full md:w-1/3 bg-white shadow rounded p-6">
          <h3 className="text-lg font-semibold">Sumeet Bhoi</h3>
          <p className="text-gray-600 mb-4">sumeet@gmail.com</p>

          <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* RIGHT SIDE - Orders */}
        <div className="w-full md:w-2/3">
          <MyordersPage />
        </div>

      </div>
    </div>
  );
};

export default Profile;
