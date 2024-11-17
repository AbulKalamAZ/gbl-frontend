import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function OtherBusinessLayout({ title, children }) {
  const navData = [
    { id: 3.12, title: "Camp & Catering", href: "/campcatering" },
    { id: 3.1, title: "Equipments", href: "/equipments" },
    { id: 3.2, title: "Vehicle Hiring", href: "/vehiclehiring" },
    {
      id: 3.3,
      title: "EPC Projects & Shutdown Projects",
      href: "/epcprojectsshutdownprojects",
    },
    { id: 3.4, title: "Trading Division", href: "/tradingdivision" },
    { id: 3.5, title: "Commercial Buildings", href: "/commercialbuildings" },
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
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center w-full h-[320px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/banners/1.jpg)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-start items-end p-16">
          <div className="container mx-auto">
            <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-16 pb-10 grid grid-cols-12 gap-6">
        {/* Left Box (9 columns) */}
        <div className="col-span-12 md:col-span-9 bg-gray-100 px-2">
          {children}
        </div>

        {/* Right Box (3 columns) */}
        <div className="col-span-12 md:col-span-3">
          <ul className="space-y-2">
            {navData.map(({ id, title, href }) => {
              return (
                <li
                  key={id}
                  className="text-gray-800 hover:text-blue-600 p-2 border border-gray-300 shadow-sm rounded-sm cursor-pointer"
                >
                  <Link href={href} className="text-sm font-medium">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
