import React from "react";
import { useNavigate } from "react-router-dom";
import { IoBusinessOutline } from "react-icons/io5";

export default function BusinessInfo() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <div>
          <p className="text-white not-italic text-2xl lg:text-4xl px-10 sm:px-20 md:px-40 lg:px-72 mx-4 sm:mx-8 mt-8 sm:mt-24 mb-8 sm:mb-12">
            Look inward to refine your business essence, and we'll guide you to
            find your perfect partner.
          </p>
        </div>

        <div>
          <button
            className="drop-shadow-2xl btn btn-info bg-white rounded-full text-blue-800 mb-4 sm:mb-8 w-64 sm:w-80 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-150"
            onClick={() => navigate("/user/home")}
          >
            Connect with us
          </button>
        </div>
        <div>
          <div className="text-3xl sm:text-5xl font-extrabold">
            <IoBusinessOutline className="inline-block ml-2 mb-5 text-white" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
              FIND YOUR BUSINESS PARTNER HERE...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
