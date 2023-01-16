import React, { useState } from "react";
// Icons
import {
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Profile = () => {
  return (
    <>
      {/* Profile */}
      <div className="font-bold text-4xl uppercase tracking-[5px] mb-10">
        Profile <span className="text-primary">Detail</span>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <form className="mb-8">
          <Input
            title="Username"
            isRequired
            placeholder="Username" />
          <hr className="my-8 border-gray-500/30" />
          <Input
            title="Email"
            isRequired
            placeholder="Email" />
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <Input
            title="Password"
            isRequired
            placeholder="Your new password" />
          <Input
            title="Confirm password"
            isRequired
            placeholder="Confirm your new password" />

          <hr className="my-8 border-gray-500/30" />
          <div className="flex justify-end">
            <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
              Update account
            </button>
          </div>
        </form>
      </div>

      {/* Inactive account */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Deactivate your account</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center gap-4 bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8">
          <div className="flex justify-center">
            <RiErrorWarningLine className="text-5xl text-yellow-600" />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-100 text-xl mb-2">
              You Are Deactivating Your Account
            </h5>
            <p className="text-gray-500">
              Once you deactivate your account, you need to create account to access the system.{" "}
              <Link className="text-blue-500">Learn more</Link>
            </p>
          </div>
        </div>
        <form className="flex items-center gap-4">
          <input type="checkbox" className="accent-primary" id="idInactive" />
          <label htmlFor="idInactive" className="text-gray-500">
            I confirm my account deactivation
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors">
            Deactivate account
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
