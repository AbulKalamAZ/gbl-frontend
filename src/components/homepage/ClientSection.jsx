import Image from "next/image";
import AnabeebImage from "../../../public/clients/anabeeb.png";
import CrsitalImage from "../../../public/clients/cristal.png";
import hundaiImage from "../../../public/clients/hundai.png";
import PoscoImage from "../../../public/clients/posco.png";
import SepcoImage from "../../../public/clients/sepco.png";
import SepcoThreeImage from "../../../public/clients/sepco3.png";
import PrimaryButton from "../PrimaryButton";

const ClientSection = () => {
  const images = [
    {
      id: 0,
      image: AnabeebImage,
    },
    {
      id: 1,
      image: SepcoImage,
    },
    {
      id: 2,
      image: SepcoThreeImage,
    },
    {
      id: 3,
      image: CrsitalImage,
    },
    {
      id: 4,
      image: hundaiImage,
    },
    {
      id: 5,
      image: PoscoImage,
    },
  ];

  return (
    <section className="pt-10">
      <div className="relative overflow-hidden w-full h-[300px]">
        <div className="flex justify-center items-center gap-12 marquee-background w-full h-full">
          <div className="section-title">
            <h2 className="h2 font-extrabold text-white mb-4 max-w-[300px]">
              Clientele
            </h2>
            <PrimaryButton content="More Clients" />
          </div>
          <div className="flex space-x-4">
            {images.map(({ id, image }) => (
              <div
                key={id}
                className={`w-40 h-36 flex items-center justify-center bg-white text-white`}
              >
                <Image
                  src={image}
                  alt={`client ${id + 1}`}
                  className="w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
