import React, { useState } from "react";
import { LuText } from "react-icons/lu";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAxios from "../services/callAxios";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";


const formValidation = () => {
  const validationSchema = yup.object({
    userName: yup
      .string()
      .required("Username is required")
      .min(6, "Password must be at least 6 characters long"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });
  return validationSchema;
};

export default function SignUp() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState('password'); 

  const validateForm = formValidation();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: validateForm,
    onSubmit: async (values) => {
      try {
        const response = await callAxios("post", "users/register", values);
        if (response?.success === true) {
          toast.success(response.message);
          navigate("/login");
        } else {
          toast.warning(response?.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password'); 
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
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.userName && formik.errors.userName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.userName}
                  </p>
                )}
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
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
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
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    type={passwordType}
                    className="grow"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <IoEyeOutline className="w-6 h-6" onClick={togglePasswordVisibility}/>

                </label>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.password}
                  </p>
                )}
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
