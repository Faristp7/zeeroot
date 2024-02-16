import { useEffect, useState } from "react";
import axios from "axios";

type UserBasicInfo = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
};

export default function Users() {
  const [userdata, setUserData] = useState<UserBasicInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<UserBasicInfo[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filteredSuggestions = userdata.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [searchQuery, userdata]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-screen dark:bg-black py-5 ">
      <div className="flex justify-between">
        <h1 className="sm:text-xl font-bold">User management</h1>
        <button className="sm:hidden bg-black dark:bg-gray-700 py-1 px-4 rounded-lg text-white text-sm font-medium">
          Add user
        </button>
      </div>
      <div>
        <div className="flex justify-between my-3">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
            className="bg-gray-300 dark:bg-gray-700 rounded-md py-2 px-3 w-full sm:w-auto outline-none"
          />
          <button className="hidden sm:block bg-black dark:bg-gray-600 py-1 px-4 rounded-lg text-white text-sm font-medium">
            Add user
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Website
                </th>
              </tr>
            </thead>
            <tbody>
              {suggestions.map((item) => (
                <tr
                  className="odd:bg-white odd:dark:bg-black even:bg-gray-50 even:dark:bg-gray-900 border-b dark:border-gray-700"
                  key={item.id}
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
