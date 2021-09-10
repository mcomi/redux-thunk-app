import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { userSelector } from "../features/User/UserSlice";

export default function Layout({ children }) {
  const history = useHistory();
  const { username, email } = useSelector(userSelector);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const onLogOut = () => {
    localStorage.removeItem("token");

    history.push("/login");
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="lg:w-64">
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            openSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        ></div>
        <div
          id="sidebar"
          className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
            openSidebar ? "translate-x-0" : "-translate-x-64"
          }`}
        >
          <div className="flex justify-between mb-10 pr-3 sm:px-2">
            <button
              className="lg:hidden text-gray-500 hover:text-gray-400"
              aria-controls="sidebar"
              aria-expanded="false"
              style={{ outline: "none" }}
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"></path>
              </svg>
            </button>
            <a
              aria-current="page"
              className="block active text-white font-bold"
              href="/"
              style={{ outline: "none" }}
            >
              LOGO
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              Pages
            </h3>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-gray-900">
                <a
                  aria-current="page"
                  className="block text-gray-200 hover:text-white transition duration-150 hover:text-gray-200 active"
                  href="/"
                  style={{ outline: "none" }}
                >
                  <div className="flex flex-grow">
                    <svg
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="fill-current text-gray-400 text-indigo-500"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                      ></path>
                      <path
                        className="fill-current text-gray-600 text-indigo-600"
                        d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                      ></path>
                      <path
                        className="fill-current text-gray-400 text-indigo-200"
                        d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                      ></path>
                    </svg>
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                </a>
              </li>
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
                <Link
                  aria-current="page"
                  className="block text-gray-200 hover:text-white transition duration-150 false active"
                  to="/appoinments"
                  style={{ outline: "none" }}
                >
                  <div className="flex flex-grow">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Appoinments</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 -mb-px">
              <div className="flex">
                <button
                  className="text-gray-500 hover:text-gray-600 lg:hidden"
                  aria-controls="sidebar"
                  aria-expanded="false"
                  style={{ outline: "none" }}
                  onClick={toggleSidebar}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <div className="relative inline-flex">
                  <button
                    className="inline-flex justify-center items-center group"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ outline: "none" }}
                    onClick={() => {
                      setOpenUserMenu(!openUserMenu);
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="flex items-center truncate">
                      <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">
                        {username}
                      </span>
                      <svg
                        className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400"
                        viewBox="0 0 12 12"
                      >
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 exit-done ${
                      openUserMenu ? "" : "hidden"
                    }`}
                  >
                    <div>
                      <ul>
                        <li>
                          <button
                            className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                            onClick={onLogOut}
                            style={{ outline: "none" }}
                          >
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
