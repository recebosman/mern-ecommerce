import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/user/login";
      const { data: res } = await axios.post(url, data);
      if (res) {
        {
          navigate("/");
          window.location.reload();
          localStorage.setItem("token", res.accessToken);
          localStorage.setItem("user", JSON.stringify(res.email));
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-screen bg-gradient-to-t from-green-500 to-blue-500 ">
      <form className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
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
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="Email"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="******************"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <Link to="/register">
          <p className="text-blue-500 text-xs mt-3">
            Don't have an account? Register
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
