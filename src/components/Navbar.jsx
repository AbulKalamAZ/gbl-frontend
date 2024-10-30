import Image from "next/image";
import HamburgerIcon from "../../public/icons/hamburger.png";
import MailIcon from "../../public/icons/mail.png";
import PhoneCallIcon from "../../public/icons/phone-call.png";
import Dropdown from "./Dropdown";
import Link from "next/link";

const navData = [
  {
    id: 1,
    title: "WHO WE ARE",
    isDropDown: false,
    href: "/who-we-are",
  },
  {
    id: 2,
    title: "MANPOWER",
    isDropDown: true,
    subMenu: [
      { id: 2.1, title: "Administration", href: "/administration" },
      { id: 2.2, title: "Civil", href: "/civil" },
      { id: 2.3, title: "Mechanical", href: "/mechanical" },
      { id: 2.4, title: "Electrical", href: "/electrical" },
      { id: 2.5, title: "Instrumentation", href: "/instrumentation" },
      { id: 2.6, title: "HSE", href: "/hse" },
      { id: 2.7, title: "Warehousing", href: "/warehousing" },
    ],
    href: "/#",
  },
  {
    id: 3,
    title: "OTHER BUSINESS UNITS",
    isDropDown: true,
    subMenu: [
      { id: 3.12, title: "Camp & Catering", href: "/camp-catering" },
      { id: 3.1, title: "Equipments", href: "/equipments" },
      { id: 3.2, title: "Vehicle Hiring", href: "/vehicle-hiring" },
      {
        id: 3.3,
        title: "EPC Projects & Shutdown Projects",
        href: "/epc-projects-shutdown-projects",
      },
      { id: 3.4, title: "Trading Division", href: "/trading-division" },
      { id: 3.5, title: "Commercial Buildings", href: "/commercial-buildings" },
      {
        id: 3.6,
        title: "Star Hotels & Furnished Apartments",
        href: "/star-hotels-furnished-apartments",
      },
      {
        id: 3.7,
        title: "Transportation Services",
        href: "/transportation-services",
      },
      {
        id: 3.8,
        title: "Supermarkets & Groceries",
        href: "/supermarkets-groceries",
      },
      {
        id: 3.9,
        title: "Restaurants & Coffee Shops ",
        href: "/restaurants-coffee-shops ",
      },
      {
        id: 3.1,
        title: "Fruits & Vegetable Shops",
        href: "/fruits-vegetable-shops",
      },
      { id: 3.11, title: "Furniture Shifting", href: "/furniture-shifting" },
    ],
    href: "/#",
  },
  {
    id: 4,
    title: "GBL PROFILE",
    isDropDown: false,
    href: "/gbl-profile",
  },
  {
    id: 5,
    title: "CLIENTELE",
    isDropDown: false,
    href: "/clientele",
  },
  {
    id: 6,
    title: "PROJECTS",
    isDropDown: false,
    href: "/projects",
  },
  {
    id: 7,
    title: "CERTIFICATES",
    isDropDown: false,
    href: "/certificates",
  },
  {
    id: 8,
    title: "WHO IS WHO",
    isDropDown: false,
    subMenu: "/who-is-who",
  },
  {
    id: 9,
    title: "MORE",
    isDropDown: true,
    subMenu: [
      { id: 9.8, title: "Sister Concerns", href: "/sister-concerns" },

      { id: 9.1, title: "Key Facts", href: "/key-facts" },

      { id: 9.2, title: "Vision", href: "/vision" },

      { id: 9.3, title: "Mission", href: "/mission" },

      { id: 9.4, title: "Company Policy", href: "/company-policy" },

      { id: 9.5, title: "Quality Policy", href: "/quality-policy" },

      { id: 9.6, title: "HSE Policy", href: "/hse-policy" },

      { id: 9.7, title: "Organization Chart", href: "/organization-chart" },
    ],
    href: "/#",
  },
  {
    id: 10,
    title: "REACH US",
    isDropDown: false,
    href: "/reach-us",
  },
];

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
            {navData.map(({ id, title, isDropDown, subMenu, href }) => {
              return isDropDown ? (
                <Dropdown key={id} title={title} items={subMenu} />
              ) : (
                <li
                  key={id}
                  className="link-item cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-60"
                >
                  <a className="font-medium" href={href} target="_blank">
                    {title}
                  </a>
                </li>
              );
            })}
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
