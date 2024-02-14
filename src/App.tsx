import { useSelector } from "react-redux";
import Login from "./components/Login";
import { RootState } from "./Redux/user/loginSlice";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  return (
    <>
      <Routes>
        {userInfo.isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
