import Image from "next/image";

const AdminCard = ({ imageSrc, title }) => {
  return (
    <div className="relative w-[280px] h-[320px] rounded overflow-hidden shadow-lg bg-[#000] cursor-pointer group">
      {/* Image Section */}
      <Image
        className="h-full opacity-90 transition-opacity duration-300 group-hover:opacity-20"
        src={imageSrc}
        alt={title}
        width={280}
        height={320}
      />

      {/* Title Section */}
      <div className="absolute top-0 left-0 w-full h-full title-wrapper px-5 py-8 bg-gradient-admin-card">
        <div className="py-2">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <div className="relative top-2 w-0 h-[2px] bg-white transition-width duration-300 group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
