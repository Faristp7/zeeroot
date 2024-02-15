import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../Redux/user/loginSlice";
import { useNavigate } from "react-router-dom";

interface UserInfoState {
  username: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoState>({
    username: "demo",
    password: "password",
  });

  const handleLoginClick = () => {
    const userData = {
      username: userInfo.username,
      isLoggedIn: true,
    };

    dispatch(handleLogin(userData));
    navigate("/home")
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-red-50">
      <div className="md:border border-blue-300 rounded-lg md:shadow-2xl p-6 w-96 bg-white">
        <div className="text-center mb-5">
          <h1 className="font-medium text-4xl text-gray-700">Welcome Back</h1>
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-black font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
              className="border border-gray-400 rounded p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-black font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
              placeholder="Password"
              className="border border-gray-400 rounded p-2 focus:outline-none"
            />
          </div>
          <button
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-lg py-1.5 mt-3 transition duration-300"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
