import Image from "next/image";
import IntroImg from "../../../public/intro-pic.png";
import PrimaryButton from "../PrimaryButton";
import SectionHeader from "../SectionHeader";

import ClipboardIcon from "../../../public/icons/clipboard.png";
import EngineerIcon from "../../../public/icons/engineer.png";
import GrowthIcon from "../../../public/icons/growth.png";

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <div className="image-wrapper col-span-12 md:col-span-4 order-2 lg:order-1 py-8">
          <Image
            src={IntroImg}
            alt="intro image"
            className="relative before:absolute before:left-0 before:top-0 before:w-[40%] before:h-[100%] before:bg-slate-700"
          />
        </div>

        <div className="content-wrapper col-span-12 md:col-span-8 order-1 lg:order-2 py-8">
          <SectionHeader content="GBL" />

          <h2 className="h2 font-extrabold mb-6">
            We are well dedicated to quality, Service and value
          </h2>

          <div className="mb-6">
            <p className="body-2 mb-4">
              <strong>
                GBL is a leading Manpower Support Service provider with its Main
                Office in Yanbu (Saudi Arabia) with its operation in Yanbu,
                Rabigh, Jeddah, Riyad, Jubail, Jizan, Red Sea, Amala, NEOM and
                overseas offices in Bahrain & UAE
              </strong>
            </p>

            <p className="body-2 mb-4">
              <strong>GBL</strong> is now a diversified conglomerate mainly
              operating in Manpower Support Services for Petrochemical, Oil &
              Gas, and Power & Utility Projects throughout Saudi Arabia, Bahrain
              and UAE.
            </p>

            <p className="body-2 mb-4">
              From humble beginnings in the 2010’s and under the charismatic
              leadership of{" "}
              <strong>
                Mr. Mahir Dehais Al Refaei, Chairman and Managing Director, GBL
              </strong>{" "}
              has now grown to over 12 well-managed Business Units.
            </p>
          </div>

          <div className="info-data-wrapper flex flex-col md:flex-row justify-start items-start lg:items-center gap-20 mb-8">
            <div className="item flex justify-center lg:justify-start items-start gap-6">
              <div className="icon">
                <Image
                  src={GrowthIcon}
                  alt="growth icon"
                  className="w-16 md:w-8 h-16 md:h-8"
                />
              </div>
              <div className="data">
                <span className="block font-extrabold text-primary text-[48px] leading-normal">
                  11
                </span>
                <span className="body-2">Years of Services</span>
              </div>
            </div>
            <div className="item flex justify-center lg:justify-start items-start gap-6">
              <div className="icon">
                <Image
                  src={EngineerIcon}
                  alt="growth icon"
                  className="w-16 md:w-8 h-16 md:h-8"
                />
              </div>
              <div className="data">
                <span className="block font-extrabold text-primary text-[48px] leading-normal">
                  192
                </span>
                <span className="body-2">Happy Clients</span>
              </div>
            </div>
            <div className="item flex justify-center lg:justify-start items-start gap-6">
              <div className="icon">
                <Image
                  src={ClipboardIcon}
                  alt="growth icon"
                  className="w-16 md:w-8 h-16 md:h-8"
                />
              </div>
              <div className="data">
                <span className="block font-extrabold text-primary text-[48px] leading-normal">
                  50
                </span>
                <span className="body-2">Projects</span>
              </div>
            </div>
          </div>

          <PrimaryButton content="More About" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
