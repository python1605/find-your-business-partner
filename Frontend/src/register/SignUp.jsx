import React, { useState } from "react";
import { LuText } from "react-icons/lu";

export default function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7500/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      console.log(response)
      if (response.ok) {
        // Registration successful, handle accordingly (e.g., redirect to login page)
        console.log("Registration successful");
      } else {
        // Registration failed, handle error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold text-black">
            Sign up
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-black">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="flex items-center gap-2 input input-bordered input-primary w-full"
                  style={{ backgroundColor: "white" }}
                >
                  <LuText />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label
                  className="flex items-center gap-2 input input-bordered input-primary w-full"
                  style={{ backgroundColor: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    {/* SVG Path */}
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label
                  className="flex items-center gap-2 input input-bordered input-primary w-full"
                  style={{ backgroundColor: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    {/* SVG Path */}
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex items-center justify-between text-gray">
                You may login from both Email & Username.
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150 mb-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
