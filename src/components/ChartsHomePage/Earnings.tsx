export default function Earnings() {
  return (
    <div className="dark:bg-black">
      <h1 className="text-4xl mb-5">Earnings</h1>
      <div className="grid grid-cols-2">
        <div className="mb-4 text-center dark:text-gray-400 font-semibold border-r dark:border-gray-700">
          <h5>This Month's Earnings</h5>
           <h1 className="text-2xl sm:text-5xl font-extrabold">$2,500</h1>
           <p className="text-sm">21% less than last month</p>
        </div>
        <div className="flex flex-col text-center dark:text-gray-400">
          <h2 className=" font-semibold">Last Month's Earnings</h2>
          <h1 className="text-2xl sm:text-5xl font-extrabold">$3,000</h1>
          <p className="text-sm">21% more than last month</p>
        </div>
      </div>
      <h1 className="text-2xl mb-5">Transactions</h1>
      <div className="grid grid-cols-2">
        <div className="mb-4 text-center dark:text-gray-400 font-semibold border-r dark:border-gray-700">
          <h5>This Month's Transactions</h5>
           <h1 className="text-2xl sm:text-5xl font-extrabold">20</h1>
           <p className="text-sm">21% less than last month</p>
        </div>
        <div className="flex flex-col text-center dark:text-gray-400">
          <h2 className=" font-semibold">Last Month's Transactions</h2>
          <h1 className="text-2xl sm:text-5xl font-extrabold">25</h1>
          <p className="text-sm">21% more than last month</p>
        </div>
      </div>
    </div>
  );
}
