import { motion } from "framer-motion";
import { useState } from "react";
import SideBar from "../components/SideBar";

export default function Home() {
  const [responsive, handleResponsive] = useState<boolean>(true);

  return (
    <div className="dark:bg-black h-screen dark:text-white transition duration-300">
      <div>
        <SideBar handleResponsive={handleResponsive} responsive={responsive} />
      </div>
      <motion.div
        transition={{ duration: 0.3 }} 
        initial={{ marginLeft: 48 }} 
        animate={{ marginLeft: !responsive ? 60 : 180 }}
      >
        
      </motion.div>
    </div>
  );
}
