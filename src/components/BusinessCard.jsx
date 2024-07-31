import Image from "next/image";

const BusinessCard = ({ bg, content }) => {
  return (
    <div className="business-card relative w-full max-w-[450px] h-auto p-5 bg-white border border-solid border-white-dark overflow-hidden cursor-pointer">
      <Image src={bg} alt="bg image" className="mb-5 rounded-br-50" />

      <span className="h6 font-semibold">{content}</span>
    </div>
  );
};

export default BusinessCard;
