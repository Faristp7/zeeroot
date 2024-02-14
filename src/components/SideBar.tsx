import { motion } from "framer-motion";

export default function SideBar() {
  return (
    <nav className="text-white  p-2 h-screen overflow-y-auto fixed top-0 left-0 flex-shrink-0 z-40 transition duration-300">
      <motion.div
        className="p-2 hover:bg-gray-800 rounded-lg cursor-pointer          "
        whileHover={{ scale: 1.1 }}
      >
        <img
          src="https://img.icons8.com/ios-filled/24/menu--v6.png"
          alt="___"
          className="dark:invert"
        />
      </motion.div>
      <div>
        
      </div>
    </nav>
  );
}
