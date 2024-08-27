import Image from "next/image";
import HamburgerIcon from "../../public/icons/hamburger.png";
import MailIcon from "../../public/icons/mail.png";
import PhoneCallIcon from "../../public/icons/phone-call.png";

const Nabvar = () => {
  return (
    <div className="w-full h-[180px] py-4 bg-white relative">
      <div className="container">
        <div className="upper-nav flex justify-center lg:justify-between items-center">
          <div className="logo max-w-[250px] min-w-[250px] h-[120px] bg-gray-600"></div>

          <div className="upper-nav-cta hidden lg:flex justify-center items-center gap-10">
            <div className="flex justify-start items-center gap-5">
              <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center">
                <Image src={MailIcon} alt="mail icon" className="w-6 h-6" />
              </div>
              <div>
                <p className="">Send Us Email</p>
                <a href="mailto:info@rehabgroupksa.com" target="_blank">
                  info@rehabgroupksa.com
                </a>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5">
              <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center">
                <Image
                  src={PhoneCallIcon}
                  alt="phone icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="">Get Quick Support</p>
                <a href="tel:+966549086882" target="_blank">
                  +966 549 086 882
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-nav container h-12 bg-primary flex justify-between lg:justify-center items-center rounded-lg absolute -bottom-6 mx-auto left-0 right-0 z-10">
          <ul className="nav-link list-none text-white w-full hidden lg:flex justify-evenly items-center self-center">
            <li className="link-item cursor-pointer">WHO WE ARE</li>
            <li className="link-item cursor-pointer">MANPOWER</li>
            <li className="link-item cursor-pointer">OTHER BUSINESS UNITS</li>
            <li className="link-item cursor-pointer">GBL PROFILE</li>
            <li className="link-item cursor-pointer">CLIENTELE</li>
            <li className="link-item cursor-pointer">PROJECTS</li>
            <li className="link-item cursor-pointer">CERTIFICATES</li>
            <li className="link-item cursor-pointer">WHO IS WHO</li>
            <li className="link-item cursor-pointer">MORE</li>
            <li className="link-item cursor-pointer">REACH US</li>
          </ul>

          <div className="flex lg:hidden gap-4">
            <div className="flex justify-start items-center gap-2">
              <Image src={MailIcon} alt="mail icon" className="w-4 h-4" />
              <span>
                <a
                  className="text-white text-sm"
                  href="mailto:info@rehabgroupksa.com"
                  target="_blank"
                >
                  info@rehabgroupksa.com
                </a>
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <Image src={PhoneCallIcon} alt="mail icon" className="w-4 h-4" />
              <span>
                <a
                  className="text-white text-sm"
                  href="tel:+966549086882"
                  target="_blank"
                >
                  +966 549 086 882
                </a>
              </span>
            </div>
          </div>
          <div className="lg:hidden">
            <Image src={HamburgerIcon} alt="mail icon" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
