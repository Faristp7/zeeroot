export default function Earnings() {
  return (
    <div className="dark:bg-black">
      <h1 className="text-4xl mb-5">Earnings</h1>
      <div className="grid grid-cols-2">
        <div className="mb-4 text-center dark:text-gray-400 font-semibold border-r dark:border-gray-700">
          <h5>This Month's Earnings</h5>
           <h1 className="text-2xl sm:text-5xl font-extrabold"><span className="text-yellow-300 dark:text-gray-400">$</span>2,500</h1>
           <p className="text-sm"><span className="text-red-700">21%</span> less than last month</p>
        </div>
        <div className="flex flex-col text-center dark:text-gray-400">
          <h2 className=" font-semibold">Last Month's Earnings</h2>
          <h1 className="text-2xl sm:text-5xl font-extrabold"><span className="text-yellow-300 dark:text-gray-400">$</span>3,000</h1>
          <p className="text-sm"><span className="text-green-700">26%</span> more than last month</p>
        </div>
      </div>
      <h1 className="text-2xl mb-5">Transactions</h1>
      <div className="grid grid-cols-2">
        <div className="mb-4 text-center dark:text-gray-400 font-semibold border-r dark:border-gray-700">
          <h5>This Month's Transactions</h5>
           <h1 className="text-2xl sm:text-5xl font-extrabold">20</h1>
           <p className="text-sm"><span className="text-green-700">21%</span> less than last month</p>
        </div>
        <div className="flex flex-col text-center dark:text-gray-400">
          <h2 className=" font-semibold">Last Month's Transactions</h2>
          <h1 className="text-2xl sm:text-5xl font-extrabold">25</h1>
          <p className="text-sm"><span className="text-red-700">27%</span> more than last month</p>
        </div>
      </div>
    </div>
  );
}
