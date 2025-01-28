import { useFacebookContext } from "../context/facebookContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUserAvailable, setIsUserAvailable] = useState(false);
  const { setWhichUser } = useFacebookContext();
  const navigate = useNavigate();

  function handleNewAccount(e) {
    e.preventDefault();
    setTimeout(() => {
      navigate("/new-account");
    }, 50);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (username === "" || password === "") {
      return;
    } else {
      const user = JSON.parse(localStorage.getItem("AvailableUsers"));
      const checkUser = user.find(
        (user) => user.username === username && user.password === password
      );

      setWhichUser(checkUser);

      if (checkUser) {
        localStorage.setItem("WhichUser", JSON.stringify(checkUser));
        setIsUserAvailable(false);
        navigate("/");
      } else {
        setIsUserAvailable(true);
        setUsername("");
        setPassword("");
      }
    }
  }

  return (
    <div className="bg-[#f2f4f7] w-full h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 px-5">
        <div className="flex flex-col items-start justify-start mb-5 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="70"
            fill="none"
            viewBox="0 0 1090 360"
          >
            <path
              fill="#0866FF"
              d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"
            />
          </svg>
          <p className="text-black text-lg md:text-2xl font-medium pl-5">
            Facebook helps you connect and share with the people in{" "}
            {/* <br className="hidden md:block" /> your life. */}
          </p>
        </div>
        <div className="bg-white h-auto w-full max-w-md rounded-lg shadow-md px-5 py-3">
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="text"
              className="border-0.5 border-amber-50 rounded px-3.5 py-3 text-lg font-medium outline-1 focus:outline-[#0866ff]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <div className="relative">
              <input
                type={passwordType}
                className="w-full border-0.5 border-amber-50 rounded outline-1 text-lg font-medium px-3.5 py-3 focus:outline-[#0866ff]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {passwordType === "password" ? (
                <svg
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() => setPasswordType("text")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="25px"
                  height="25px"
                >
                  <path d="M 25.144531 8 C 19.103964 8 13.561453 10.431954 9.2792969 14.439453 A 1.0001 1.0001 0 1 0 10.646484 15.898438 C 14.596328 12.201935 19.639099 10 25.144531 10 C 30.622398 10 35.641117 12.180148 39.582031 15.84375 A 1.0001 1.0001 0 1 0 40.943359 14.378906 C 36.670274 10.406508 31.154664 8 25.144531 8 z M 45.490234 20.9375 A 1.0001 1.0001 0 0 0 44.556641 21.625 C 40.545678 29.071912 33.337413 34 25.117188 34 C 16.915226 34 9.721572 29.091708 5.7050781 21.671875 A 1.0001 1.0001 0 0 0 3.7578125 22 L 3.7578125 22.048828 A 1.0001 1.0001 0 0 0 3.875 22.521484 C 5.2332071 25.057502 6.9512191 27.330506 8.9472656 29.257812 L 3.2695312 35.316406 A 1.0004426 1.0004426 0 0 0 4.7304688 36.683594 L 10.441406 30.587891 C 12.090811 31.948408 13.894282 33.09259 15.822266 33.96875 L 12.101562 41.560547 A 1.0001549 1.0001549 0 1 0 13.898438 42.439453 L 17.683594 34.712891 C 19.691189 35.420885 21.807993 35.849597 24.001953 35.958984 A 1.0001 1.0001 0 0 0 24 36 L 24 44 A 1.0001 1.0001 0 1 0 26 44 L 26 36 A 1.0001 1.0001 0 0 0 25.998047 35.966797 C 28.264048 35.87761 30.449568 35.441539 32.519531 34.716797 L 36.09375 42.419922 A 1.0001 1.0001 0 1 0 37.90625 41.580078 L 34.376953 33.96875 C 36.184396 33.152619 37.884395 32.108088 39.449219 30.863281 L 45.292969 36.707031 A 1.0001 1.0001 0 0 0 46.109375 37.009766 A 1.0001 1.0001 0 0 0 46.207031 36.996094 A 1.0001 1.0001 0 0 0 46.707031 35.292969 L 40.964844 29.550781 C 43.109605 27.548898 44.953216 25.160853 46.386719 22.470703 A 1.0001 1.0001 0 0 0 46.505859 22 L 46.505859 21.951172 A 1.0001 1.0001 0 0 0 45.490234 20.9375 z" />
                </svg>
              ) : (
                <svg
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() => setPasswordType("password")}
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 60.254 60.254"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M29.008,48.308c-16.476,0-28.336-17.029-28.833-17.754c-0.248-0.36-0.231-0.841,0.039-1.184
                     c0.561-0.712,13.906-17.424,29.913-17.424c17.953,0,29.474,16.769,29.956,17.482c0.23,0.342,0.229,0.79-0.007,1.129
                     c-0.475,0.688-11.842,16.818-29.899,17.721C29.786,48.297,29.396,48.308,29.008,48.308z M2.267,30.028
                     c2.326,3.098,13.553,16.967,27.812,16.254c15.237-0.76,25.762-13.453,27.938-16.3c-2.175-2.912-12.811-16.035-27.889-16.035
                     C16.7,13.947,4.771,27.084,2.267,30.028z"
                        />
                      </g>
                      <g>
                        <path
                          d="M30.127,37.114c-3.852,0-6.986-3.135-6.986-6.986c0-3.851,3.134-6.985,6.986-6.985s6.986,3.135,6.986,6.985
                     C37.113,33.979,33.979,37.114,30.127,37.114z"
                        />
                      </g>
                      <g>
                        <path
                          d="M30.127,42.614c-6.885,0-12.486-5.602-12.486-12.486c0-6.883,5.602-12.485,12.486-12.485
                     c6.884,0,12.486,5.602,12.486,12.485C42.613,37.012,37.013,42.614,30.127,42.614z M30.127,19.641
                     c-5.782,0-10.486,4.704-10.486,10.486c0,5.781,4.704,10.485,10.486,10.485s10.486-4.704,10.486-10.485
                     C40.613,24.345,35.91,19.641,30.127,19.641z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              )}
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-4 bg-[#1877f2] rounded text-[#ffffff] font-bold text-xl mb-2"
            >
              Log in
            </button>
            {isUserAvailable ? (
              <p className="text-center font-bold">Please make a account</p>
            ) : (
              <p className="text-center font-bold">Click to login</p>
            )}
            <hr />
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={handleNewAccount}
                className="cursor-pointer bg-[#36a420] text-white text-xl px-5 font-bold py-4 inline-block rounded"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
