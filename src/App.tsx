import { useSelector } from "react-redux";
import Login from "./components/Login";
import { RootState } from "./Redux/user/loginSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  return (
    <>
      <Routes>
        {userInfo.isLoggedIn ? (
          <Route path="/home" element={<Home />} />
          ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
