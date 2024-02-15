import OverInfo from "./OverInfo";
import Linechart from "./ChartsHomePage/Linechart";
import Earnings from "./ChartsHomePage/Earnings";
import Barchart from "./ChartsHomePage/Barchart";
import Draft from "./Draft";

export default function Graphs() {
  return (
    <div>
      <OverInfo />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <h1
            className="mb-5 font-extrabold sm:text-4xl leading-tight"
            style={{ color: "#8884d8" }}
          >
            Sales Trends
          </h1>
          <Linechart />
        </div>
        <div>
          <Earnings/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-gray-200 dark:bg-gray-900 m-5 rounded-lg p-5">
           <Draft/>
        </div>
        <div>
        <h1
            className="mb-5 font-extrabold sm:text-4xl leading-tight"
            style={{ color: "#82ca9d" }}
          >
             Insights
        </h1>
          <Barchart/>
        </div>
      </div>
    </div>
  );
}
