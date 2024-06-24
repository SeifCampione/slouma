// src/components/Login.jsx

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ height: "100vh", backgroundColor: "#0F0F1A" }}
    >
      <div className="bg-customWhite p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-darkBlue">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to={"/homepage"}>
              <button
                className="bg-darkBlue hover:bg-lightBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </Link>
            <a
              className="inline-block align-baseline font-bold text-sm text-darkBlue hover:text-lightBlue"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
