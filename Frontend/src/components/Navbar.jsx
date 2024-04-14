import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const navItems = (
    <>
      <li>
        <a>HOME</a>
      </li>
      <li>
        <a>FIND PARTNER</a>
      </li>
      <li>
        <a>BLOG</a>
      </li>
      <li>
        <a>ABOUT US</a>
      </li>
    </>
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* <div className=" container mx-auto"> */}
      <div className="navbar bg-white" style={{ height: "100px" }}>
        <div className="navbar-start">
          <div className="dropdown text-black" ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-black text-base bg-white"
              >
                <div>{navItems}</div>
              </ul>
            )}
          </div>
          <div
            className="text-2xl mr-1 text-blue-900"
            onClick={() => navigate("/home")}
          >
            <BsFillPeopleFill />
          </div>
          <a
            className="font-bold text-2xl text-blue-500"
            onClick={() => navigate("/user/home")}
          >
            Business Partner
          </a>
        </div>
        <div className="navbar-center">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-0 text-black text-base">
              {navItems}
            </ul>
          </div>
          <div>
            <label
              className="input input-bordered  items-center gap-2 bg-white  rounded-full hidden md:block"
              style={{ borderColor: "#1884a8" }}
            >
              <input
                type="text"
                className="grow"
                style={{ "margin-top": "0.65rem" }}
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        <div className="navbar-end px-1">
          <div className="px-1 mr-2">
            <button
              className="btn btn-outline btn-info rounded-full w-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-150"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className="btn btn-info bg-blue-800 text-white hidden md:block rounded-full w-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-150"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
