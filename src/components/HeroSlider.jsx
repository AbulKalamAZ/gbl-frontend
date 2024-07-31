import Image from "next/image";
import SliderImgOne from "../../public/slider/slider-img-1.jpg";

const HeroSlider = () => {
  return (
    <div className="relative">
      <Image src={SliderImgOne} alt="slide one" />
      <div className="w-full min-h-[100%] bg-gray-900 absolute top-0 left-0 opacity-50"></div>
    </div>
  );
};

export default HeroSlider;
