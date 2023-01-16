import React from "react";
import { Link } from "react-router-dom";
// Icons
import { RiMailLine, RiUserLine } from "react-icons/ri";
const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Recover <span className="text-primary">password</span>
        </h1>
        <form className="mb-8">
        <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Name"
            />
          </div>
          <div className="relative mb-8">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Email"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Recover Password
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-2">
            Know your account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Login
            </Link>
          </span>
          <span className="flex items-center gap-2">
            Create an account?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
