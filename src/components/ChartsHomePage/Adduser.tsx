const formDatas = [
  { type: "text", id: "Name", placeHolder: "Name" },
  { type: "text", id: "Username", placeHolder: "Username" },
  { type: "email", id: "Email", placeHolder: "Email" },
  { type: "phone", id: "Phone", placeHolder: "Phone" },
  { type: "text", id: "Website", placeHolder: "Website" },
];

import { motion } from "framer-motion";

export default function Adduser({
  setHandleModal,
}: {
  setHandleModal: (handleModalOpen: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute flex w-full h-full justify-center items-center -left-0 z-50 backdrop-blur-sm transition duration-300"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="mx-5 sm:mx-auto w-full sm:w-96 bg-white dark:bg-gray-800 rounded-md p-5 border-2 dark:border-none"
      >
        <div className="flex justify-between mb-4 items-center">
          <h1 className="dark:text-gray-300 text-2xl font-extrabold">
            Add user
          </h1>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png"
            alt="X"
            className="dark:invert cursor-pointer"
            onClick={() => setHandleModal(false)}
          />
        </div>
        <div className="flex flex-col gap-3">
          {formDatas.map((item) => (
            <div className="relative z-0" key={item.id}>
              <input
                type={item.type}
                id={item.id}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor=""
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {item.placeHolder}
              </label>
            </div>
          ))}
          <div className="flex justify-end mt-3">
            <button className="text-white bg-blue-900 px-2.5 py-1 rounded-md font-medium" onClick={() => setHandleModal(false)}>
              Add user
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
