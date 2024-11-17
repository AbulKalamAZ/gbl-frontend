import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "../../public/icons/close.png";
import HamburgerIcon from "../../public/icons/hamburger.png";
import MailIcon from "../../public/icons/mail.png";
import PhoneCallIcon from "../../public/icons/phone-call.png";
import Dropdown from "./Dropdown";

const Nabvar = () => {
  const navData = [
    {
      id: 1,
      title: "WHO WE ARE",
      isDropDown: false,
      href: "/whoweare",
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
        { id: 3.12, title: "Camp & Catering", href: "/campcatering" },
        { id: 3.1, title: "Equipments", href: "/equipments" },
        { id: 3.2, title: "Vehicle Hiring", href: "/vehiclehiring" },
        {
          id: 3.3,
          title: "EPC Projects & Shutdown Projects",
          href: "/epcprojectsshutdownprojects",
        },
        { id: 3.4, title: "Trading Division", href: "/tradingdivision" },
        {
          id: 3.5,
          title: "Commercial Buildings",
          href: "/commercialbuildings",
        },
        {
          id: 3.6,
          title: "Star Hotels & Furnished Apartments",
          href: "/starhotelsfurnishedapartments",
        },
        {
          id: 3.7,
          title: "Transportation Services",
          href: "/transportationservices",
        },
        {
          id: 3.8,
          title: "Supermarkets & Groceries",
          href: "/supermarketsgroceries",
        },
        {
          id: 3.9,
          title: "Restaurants & Coffee Shops ",
          href: "/restaurantscoffeeshops ",
        },
        {
          id: 3.123,
          title: "Fruits & Vegetable Shops",
          href: "/fruitsvegetableshops",
        },
        { id: 3.11, title: "Furniture Shifting", href: "/furnitureshifting" },
      ],
      href: "/#",
    },
    {
      id: 4,
      title: "GBL PROFILE",
      isDropDown: false,
      href: "/profile",
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
      href: "/whoiswho",
    },
    {
      id: 9,
      title: "MORE",
      isDropDown: true,
      subMenu: [
        { id: 9.8, title: "Sister Concerns", href: "/sisterconcerns" },

        { id: 9.1, title: "Key Facts", href: "/keyfacts" },

        { id: 9.2, title: "Vision", href: "/vision" },

        { id: 9.3, title: "Mission", href: "/mission" },

        { id: 9.4, title: "Company Policy", href: "/companypolicy" },

        { id: 9.5, title: "Quality Policy", href: "/qualitypolicy" },

        { id: 9.6, title: "HSE Policy", href: "/hsepolicy" },

        { id: 9.7, title: "Organization Chart", href: "/organizationchart" },
      ],
      href: "/#",
    },
    {
      id: 10,
      title: "REACH US",
      isDropDown: false,
      href: "/reachus",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false); // state for managing off-canvas menu

  // Toggle the off-canvas menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
                <p>Send Us Email</p>
                <a href="mailto:info@gblgroupksa.com" target="_blank">
                  info@gblgroupksa.com
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
                <p>Get Quick Support</p>
                <a href="tel:+966549086882" target="_blank">
                  +966 549 086 882
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Navbar */}
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

          {/* Mobile Hamburger Icon */}
          <div className="w-full lg:hidden flex justify-between items-center gap-4">
            <div className="flex justify-start items-center gap-2">
              <Image src={MailIcon} alt="mail icon" className="w-4 h-4" />
              <span>
                <a
                  className="text-white text-xs"
                  href="mailto:info@gblgroupksa.com"
                  target="_blank"
                >
                  info@gblgroupksa.com
                </a>
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <Image src={PhoneCallIcon} alt="phone icon" className="w-4 h-4" />
              <span>
                <a
                  className="text-white text-xs"
                  href="tel:+966549086882"
                  target="_blank"
                >
                  +966 549 086 882
                </a>
              </span>
            </div>

            {/* Hamburger Icon */}
            {menuOpen ? (
              <div onClick={toggleMenu}>
                <Image
                  src={HamburgerIcon}
                  alt="hamburger icon"
                  className="w-5 h-5"
                />
              </div>
            ) : (
              <div onClick={toggleMenu}>
                <Image src={CloseIcon} alt="close icon" className="w-5 h-5" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Off-Canvas Menu (Mobile) */}
      <div
        className={`w-10/12 block lg:hidden fixed inset-0 z-20 transform transition-transform ${
          !menuOpen ? "-translate-x-[100%]" : "translate-x-0"
        }`}
      >
        <div className="w-full bg-white h-full p-5">
          {/* logo */}
          <div className="logo max-w-[250px] min-w-[250px] h-[120px] bg-gray-600 mb-12"></div>

          <ul className="space-y-4">
            {navData.map(({ id, title, isDropDown, subMenu, href }) => {
              return isDropDown ? (
                <CollapsibleMenu key={id} title={title} subMenu={subMenu} />
              ) : (
                <li key={id} className="text-black font-medium">
                  <a href={href} target="_blank" className="block">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CollapsibleMenu = ({ title, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the collapsible state
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the isOpen stat
  };

  return (
    <div className="collapsible-menu">
      {/* Parent Menu Item */}
      <div
        onClick={toggleMenu} // When clicked, toggle the submenu visibility
        className="parent-menu-item cursor-pointer text-black font-medium"
      >
        {title}
      </div>

      {/* Submenu (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="submenu p-4">
          <ul>
            {subMenu.map(({ id, title, href }) => (
              <li key={id} className="submenu-item mb-2">
                <Link
                  href={href}
                  target="_blank"
                  className="text-md text-gray-700 "
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nabvar;
