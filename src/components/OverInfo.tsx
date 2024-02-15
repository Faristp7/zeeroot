import CountUp from "react-countup";

const values = [
  { title: "Total users", val: 24414 },
  { title: "Premium users", val: 19140 },
  { title: "Blocked users", val: 344 },
];

export default function OverInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {values.map((val, index) => (
        <div
          className="bg-gray-300 dark:bg-gray-900 flex flex-col justify-center  items-center py-5 rounded-lg"
          key={index}
        >
          <h1 className="dark:text-gray-200">{val.title}</h1>
          <CountUp end={val.val} className="sm:text-4xl font-bold dark:text-gray-400" />
        </div>
      ))}
    </div>
  );
}
