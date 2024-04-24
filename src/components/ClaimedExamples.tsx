import Image from "next/image";
import thumbImg from "../../public/300wd.jpg";
import ytb from "../../public/youtube.svg";

export default function ClaimedExamples() {
  return (
    <div className="flex flex-col w-fit justify-center items-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-3xl px-6 pb-4">
        Dilluc claimed
      </h2>
      <hr className="w-48 h-1 mx-auto my bg-gray-300 border-0 rounded md:my dark:bg-gray-700"></hr>
      <Image
        className="mt-2"
        src={ytb}
        alt="Youtube SVG"
        width={25}
        height={25}
      />
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-2xl px-6 pb-4 bt-2">
        World of the Wild | Episode 1: The Amazon Rainforest | Free Documentary
        Nature
      </p>
      <div className="relative text-center">
        <Image
          src={thumbImg}
          alt="Youtube Video Thumbnail"
          width={200}
          height={200}
          style={{ borderRadius: "5px", overflow: "hidden" }}
        />
        <div className="absolute right-4 bottom-2 text-white bg-gray-200/25 w-12">
          <span className="text=white font-bold">12:01</span>
        </div>
      </div>
    </div>
  );
}
