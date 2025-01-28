import "./CustomCss/Header.css";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import dpImage from "../assets/images/dp.jpg";

function Header() {
  const [handleSearchIcon, setHandleSearchIcon] = useState(true);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const [getPage, setGetPage] = useState("");

  function handleMyAccount() {
    setLogout(!logout);
  }

  const ref = useRef();

  function handleFacebookSearch() {
    console.log("Search Facebook");
  }

  function handleLogout() {
    console.log("Logout");
    const getUser = localStorage.getItem("WhichUser");
    const user = JSON.parse(getUser);
    if (user) {
      localStorage.setItem(
        "WhichUser",
        JSON.stringify({ username: "", password: "" })
      );

      navigate("/login");
      window.location.reload();
    }
  }

  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      setHandleSearchIcon(true);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, setHandleSearchIcon]);

  return (
    <div className="w-full fixed flex justify-between items-center top-0 px-5 mb-30 bg-white py-1 shadow-md z-30">
      <div className="flex items-center gap-5 ">
        <div className="fb-logo">
          <Link to="/">
            <i className="fa-brands fa-facebook text-[#0866ff] text-4xl"></i>
          </Link>
        </div>
        <div className="fb-search relative flex items-center">
          <input
            type="text"
            placeholder="Search Facebook"
            ref={ref}
            className={
              handleSearchIcon
                ? "rounded-full bg-[#f0f2f5] px-3 py-2 pl-10 w-65 duration-200 focus:outline-none hidden  lg:block"
                : "rounded-full bg-[#f0f2f5] px-3 py-2 pl-4 w-65 duration-200  focus:outline-none hidden  lg:block"
            }
            onChange={() => handleFacebookSearch()}
            onClick={() => setHandleSearchIcon(!handleSearchIcon)}
          />
          {handleSearchIcon ? (
            <i className="fa-solid text-base fa-magnifying-glass absolute left-[-5px] top-[-18px] lg:left-3 lg:top-3.5 rounded-full lg:rounded-none  text-[#65686c] bg-[#f0f2f5] p-3 lg:p-0 lg:bg-transparent "></i>
          ) : null}
        </div>
      </div>
      <div className="w-full  justify-center items-center ml-6 hidden md:flex md:ml-20 lg:ml-20">
        <ul
          className="flex items-center justify-between gap-3 xl:gap-13 lg:gap-3"
          id="header-menus"
        >
          <li className="hover:bg-[#f2f2f2] px-7 py-4 rounded-lg cursor-pointer relative active_text ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? ` text-[#0866ff]  active-link` : ` text-[#606366]`
              }
            >
              <i className="fa-solid fa-house text-xl"></i>
            </NavLink>
          </li>

          <li className="hover:bg-[#f2f2f2] px-7 py-4 rounded-lg cursor-pointer  relative  active_text">
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? ` text-[#0866ff] active-link` : ` text-[#606366]`
              }
            >
              <i className="fa-solid fa-user-group text-xl"></i>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-1/2  lg:w-full xl:w-1/2 flex justify-end xl:justify-center items-center">
        <ul className="flex items-center gap-2 sm:gap-5">
          <li
            onClick={() => setGetPage((prev) => !prev)}
            className="p-3 relative cursor-pointer rounded-full hover:bg-[#d6d9dd] bg-[#f0f2f5] flex justify-center items-center"
          >
            <i className="fa-solid fa-bars text-xl "></i>

            {getPage && (
              <ul
                className="flex items-center -left-10 rounded-lg p-3 bg-gray-300 -bottom-20 justify-between gap-3 xl:gap-13 absolute lg:gap-3"
                id="header-menus"
              >
                <li className="hover:bg-[#f2f2f2] px-3 py-2 rounded-lg cursor-pointer relative active_text ">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? ` text-[#0866ff]  ` : ` text-[#606366]`
                    }
                  >
                    <i className="fa-solid fa-house text-xl"></i>
                  </NavLink>
                </li>

                <li className="hover:bg-[#f2f2f2] px-3 py-2 rounded-lg cursor-pointer  relative  active_text">
                  <NavLink
                    to={"/profile"}
                    className={({ isActive }) =>
                      isActive ? ` text-[#0866ff] ` : ` text-[#606366]`
                    }
                  >
                    <i className="fa-solid fa-user-group text-xl"></i>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="p-3 cursor-pointer rounded-full hover:bg-[#d6d9dd] bg-[#f0f2f5] flex justify-center items-center">
            <i className="fa-solid fa-bell text-xl"></i>
          </li>
          <li
            className="cursor-pointer relative"
            onClick={() => handleMyAccount()}
          >
            <img
              src={dpImage}
              className="w-10 h-10 rounded-full "
              alt="Image not found"
            />
            <i className="fa-solid fa-circle-chevron-down absolute bottom-[-5px] right-0 text-[#787b81]"></i>
            {logout && (
              <div className="absolute top-14 -right-3 bg-white shadow-md rounded-lg p-3">
                <ul>
                  <li className="cursor-pointer" onClick={() => handleLogout()}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
