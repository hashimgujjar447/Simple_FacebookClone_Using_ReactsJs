import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/new-account";
  useEffect(() => {
    const user = localStorage.getItem("WhichUser");

    if (
      location.pathname === "/login" ||
      location.pathname === "/new-account"
    ) {
      setLoading(false);
      return;
    }

    try {
      const getUser = JSON.parse(user);
      if (getUser && getUser.username) {
        setIsUser(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }, [navigate, location.pathname]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={isUser ? <Home /> : <LoginPage />} />
        <Route path="/profile" element={isUser ? <Profile /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-account" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
