import { draftData } from "../Api/HomePageApi";

export default function Draft() {
  return (
    <>
      <p className="font-medium dark:text-gray-300">Your Draft</p>
      {draftData.map((item) => (
        <div className="flex gap-3 my-2 mt-5" key={item.date}>
          <div>
            <img width={74} className="rounded-md" src={item.img} alt="just" />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center font-medium">
              <p className="text-sm dark:text-gray-400">{item.date}</p>
              <img
                width="18"
                src="https://img.icons8.com/ios-glyphs/30/000000/ellipsis.png"
                alt="ellipsis"
                className="dark:invert"
              />
            </div>
            <div>
              <p className="text-sm mt-1">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
