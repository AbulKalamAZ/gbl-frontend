import Image from "next/image";

const ServiceCard = ({ bg, content }) => {
  return (
    <div className="service-card relative w-full max-w-[280px] h-[300px] overflow-hidden cursor-pointer">
      <Image src={bg} alt="bg image" />
      <div className="absolute top-0 left-0 w-full h-[100%] bg-gray-900 transition-opacity opacity-55 hover:opacity-85 z-0"></div>
      <span className="absolute top-8 left-6 text-white text-[18px] font-semibold z-10">
        {content}
      </span>
    </div>
  );
};

export default ServiceCard;
