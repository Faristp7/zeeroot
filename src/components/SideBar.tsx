import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../Redux/user/loginSlice";

const sideBar = [
  {
    img: "https://img.icons8.com/material-outlined/48/000000/home--v2.png",
    title: "Home",
  },
  {
    img: "https://img.icons8.com/material-outlined/48/000000/user--v1.png",
    title: "Users",
  },
  {
    img: "https://img.icons8.com/material-outlined/48/000000/appointment-reminders--v1.png",
    title: "Notifications",
  },
  {
    img: "https://img.icons8.com/material-outlined/48/000000/settings--v1.png",
    title: "Settings",
  },
  {
    img: "https://img.icons8.com/fluency-systems-regular/48/000000/chat-message.png",
    title: "Messages",
  },
];

const themIcon = [
  "https://img.icons8.com/material-outlined/48/000000/sun--v1.png",
  "https://img.icons8.com/windows/32/000000/crescent-moon.png",
];

export default function SideBar({
  handleResponsive,
  responsive
}: {
  handleResponsive: (responsive: boolean) => void;
  responsive : boolean
}) {
  const [theme, handleTheme] = useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const userData = {
      username: "",
      isLoggedIn: false,
    };
    dispatch(handleLogin(userData));
    navigate("/");
  };

  const handleSideBar = (val: string) => {
    if (val === "Logout") {
      handleLogout();
    }
  };

  const handleThemeGlobal = () => {
    handleTheme(!theme);
    if (!theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <motion.nav
      className="bg-white dark:bg-black dark:text-white  h-screen overflow-y-auto overflow-x-hidden fixed top-0 left-0 flex-shrink-0 z-40 transition duration-300 border-r dark:border-gray-600"
      onHoverEnd={() => handleResponsive(false)}
      onHoverStart={() => handleResponsive(true)}
      initial={{ width: 64 }}
      animate={{ width: responsive ? 170 : 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col pl-2 mt-10 gap-5">
        {sideBar.map((val) => (
          <button
            className="flex gap-2"
            key={val.title}
            onClick={() => handleSideBar(val.title)}
          >
            <img
              width="24"
              height="24"
              src={val.img}
              className="dark:invert "
              alt="home--v2"
            />
            {responsive && (
              <motion.p
                className="font-medium "
                initial={{ opacity: 0 }}
                animate={{ opacity: responsive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {val.title}
              </motion.p>
            )}
          </button>
        ))}
        <button className="flex gap-2" onClick={handleThemeGlobal}>
          <motion.img
            width="24"
            height="24"
            src={theme ? themIcon[0] : themIcon[1]}
            className="dark:invert"
            alt="home--v2"
            animate={{ rotate: theme ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          />
          {responsive && (
            <motion.p
              className="font-medium "
              initial={{ opacity: 0 }}
              animate={{ opacity: responsive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme ? "Light" : "Dark"}
            </motion.p>
          )}
        </button>

        <button className="flex gap-2" onClick={handleLogout}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency-systems-filled/48/000000/exit.png"
            className="dark:invert "
            alt="home--v2"
          />
          {responsive && (
            <motion.p
              className="font-medium "
              initial={{ opacity: 0 }}
              animate={{ opacity: responsive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Logout
            </motion.p>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
