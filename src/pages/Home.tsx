import { motion } from "framer-motion";
import { useState } from "react";
import SideBar from "../components/SideBar";
import Graphs from "../components/Graphs";
import Users from "../components/Users";

export default function Home() {
  const [responsive, handleResponsive] = useState<boolean>(false);
  const [selectedComponent, setSelectodComponent] = useState<string>("Home");

  return (
    <div className="dark:bg-black h-screen dark:text-white transition duration-300">
      <div>
        <SideBar handleResponsive={handleResponsive} responsive={responsive} setSelectodComponent={setSelectodComponent}/>
      </div>
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ marginLeft: 48 }}
        animate={{ marginLeft: !responsive ? 68 : 180 }}
      >
        <div className="py-5 pr-3">
          {selectedComponent === "Home" && <Graphs />}
          {selectedComponent === "Users" && <Users />}
        </div>
      </motion.div>
    </div>
  );
}
