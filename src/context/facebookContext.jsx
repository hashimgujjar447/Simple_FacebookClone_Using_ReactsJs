import { createContext, useContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import dp from "../assets/images/dp.jpg";

const FacebookContext = createContext();

export const FacebookProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      username: "admin",
      password: "admin",
      post: [
        {
          id: 1,
          name: "Muhammad Hashim",
          image: dp,
          content: "Had an amazing hike today! The views were breathtaking.",
          time: "2 min",
          likes: { count: 3, liked: false },
        },
        {
          id: 2,
          name: "Muhammad Hashim",
          image: dp,
          content:
            "Celebrating my birthday with friends and family. So grateful!",
          time: "1 month",
          likes: { count: 3, liked: false },
        },
      ],
    },
  ]);

  const [whichUser, setWhichUser] = useState({
    username: "",
    password: "",
    post: [],
  });

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("AvailableUsers"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  return (
    <FacebookContext.Provider
      value={{ users, addUser, setWhichUser, whichUser, setUsers }}
    >
      {children}
    </FacebookContext.Provider>
  );
};

export const useFacebookContext = () => {
  return useContext(FacebookContext);
};

FacebookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
