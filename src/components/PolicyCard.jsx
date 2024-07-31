import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const PolicyCard = ({ title, text, icon = null }) => (
  <div className="flex flex-col justify-center items-center max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 cursor-pointer">
    <div className="flex justify-center items-center w-24 h-24 mb-4">
      <Image src={icon} alt="title" className="w-24 h-24" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">{title}</h2>
    <p className="text-gray-700 text-base text-center mb-4 flex-grow">{text}</p>
    <div className="mt-auto">
      <PrimaryButton content="Read More" />
    </div>
  </div>
);

export default PolicyCard;
