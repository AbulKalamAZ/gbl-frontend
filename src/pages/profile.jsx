import GetInTouch from "@/components/GetInTouch";
import PhoneIcon from "@/components/icons/PhoneIcon";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../../public/gbl-profile-pic.jpg";

export default function GBLProfile() {
  const companyDetails = [
    {
      title: "Company Name",
      value: "AL REHAB ADVANCED TRADING AND CONTRACTING CO. LTD.",
    },
    { title: "Mahir Dehais Al Refaei", value: "Chairman & Managing Director" },
    { title: "Makram Saleh Zamar", value: "Government Relation Officer" },
    {
      title: "Abdul Hameed Kanhirangadan",
      value: "General Manager",
      phone: ["054 260 6882", "054 661 7882"],
    },
    {
      title: "Abdul Samad Cheriyam Parambil",
      value: "Administration and Marketing Manager, Yanbu Head Office",
      phone: ["054 908 6882"],
    },
    {
      title: "Muhammed Basim",
      value: "Eastern Region Manager",
      phone: ["056 081 6443"],
    },
    {
      title: "Abdul Baris",
      value: "Jubail Branch Manager",
      phone: ["050 123 4409"],
    },
    {
      title: "Arjun Dev",
      value: "Jizan Region Manager",
      phone: ["054 661 0882"],
    },
    {
      title: "Nishaj Kannan",
      value: "Jizan Branch Manager",
      phone: ["053 696 9502"],
    },
    {
      title: "Muhammed Saad",
      value: "Rabigh Branch Manager",
      phone: ["054 149 882"],
    },
    {
      title: "Rishalat Islam",
      value: "Jeddah Branch Manager",
      phone: ["054 661 7889"],
    },
    {
      title: "Shafeek Ali",
      value: "Riyadh & Al Qassim Branch Manager",
      phone: ["054 166 0882"],
    },
    {
      title: "Shibu Kunjumon",
      value: "Umlaj Branch Manager",
      phone: ["054 661 2882"],
    },
    {
      title: "Shabeer Aboo",
      value: "Logistic Controller",
      phone: ["050 757 7882"],
    },
    {
      title: "Muhammed Ali",
      value: "Yanbu Toyota Camp Manager",
      phone: ["056 281 8921"],
    },
    {
      title: "Yasir Mukhtar",
      value: "Yanbu Mojel Camp Manager",
      phone: ["054 907 7882"],
    },
    {
      title: "Sadiq Nambikkunnan",
      value: "Camp & Catering Services",
      phone: ["054 271 1416"],
    },
    {
      title: "Suneer Khan",
      value: "Star Hotels and Furnished Apartment Services",
      phone: ["054 661 0882"],
    },
    {
      title: "Rinshad",
      value: "Transportation Services",
      phone: ["050 779 2686"],
    },
    {
      title: "Rabeesh VK",
      value: "Camp Services, Jizan",
      phone: ["055 088 4566"],
    },
    {
      title: "Dhahir Jainalaudeen",
      value: "Catering Services, Jizan",
      phone: ["054 331 2805"],
    },
    {
      title: "Abdul Aziz Thalapadi",
      value: "Area Manager Outdoor Catering Services - Jizan",
      phone: ["050 9382 204"],
    },
    {
      title: "Sharafudheen",
      value: "Country Manager – Trading",
      phone: ["050 535 3379"],
    },
    {
      title: "Suneer Babu",
      value: "Project Catering and Restaurant Services",
      phone: ["057 118 8490"],
    },
    {
      title: "Madhavan Chendatta",
      value: "EPC Projects & Shutdown Projects",
      phone: ["053 013 9703"],
    },
    {
      title: "Jemshad K",
      value: "EPC Projects & Shutdown Projects",
      phone: ["055 335 0882"],
    },
    {
      title: "Nabeel Erakkodan",
      value: "Commercial Buildings",
      phone: ["056 882 7882"],
    },
    {
      title: "Faisal Karattil",
      value: "Supermarkets & Groceries",
      phone: ["053 852 6051"],
    },
    {
      title: "Nabeel Erakkodan",
      value: "In Charge Restaurants & Coffee Shops",
      phone: ["056 882 7882"],
    },
    {
      title: "Nusrul Islam",
      value: "Fruits & Vegetable Shops",
      phone: ["057 298 4273"],
    },
    {
      title: "Faraj Moosa",
      value: "Furniture Shifting Services",
      phone: ["055 827 6249"],
    },
    {
      title: "Head Office",
      value: `First Floor, Al Hazza Commercial Centre, Near Gold Souk Signal, King Abdul Aziz Street, PB# 6854/3955. Yanbu Al Bahar – 46424, Madeena Region, Kingdom of Saudi Arabia`,
    },
    {
      title: "Bank Reference",
      value: `Beneficiary Name - Al Rehab Advanced Trading & Contracting Company, Bank Name - National Commercial Bank, Branch - Yanbu Main Branch, A/c No - 3517 2616 000 100, IBAN - SA10 1000 0035 1726 1600 0100, SWIFT CODE - NCBKSAJE`,
    },
    { title: "Commercial Registration", value: "4700012410" },
    { title: "GOSI Certificate", value: "556128006" },
    { title: "Saudization Certificate", value: "20002106000004" },
    { title: "Zakat Certificate", value: "2380796929" },
    { title: "VAT Registration Certificate", value: "310385974700003" },
    { title: "Chamber of Commerce", value: "205001114289" },
    { title: "ARAMCO Vendor Code", value: "100535333" },
    { title: "Sabic Vendor Code", value: "VDR73637391" },
    { title: "ISO 9001:2015", value: "ACSGP-ARATCO-QSM-5064" },
    { title: "ISO 14001:2015", value: "AMER13358" },
    { title: "ISO 45001:2018", value: "AMER13358" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Profile</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, a GBL vendor code registration holding company."
        />
      </Head>

      {/* Description */}
      <div className="flex flex-col md:flex-row bg-[#f9f9f9] p-8 rounded-sm mb-12">
        {/* Profile Image Section */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="w-48 h-auto md:w-64 md:h-auto">
            <Image
              src={ProfilePic} // Replace with your image path
              alt="Company Profile"
              width={192}
              height={192}
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* Company Profile Details Section */}
        <div className=" ml-0 md:ml-8">
          <div className="text-left md:text-left mb-6">
            <h3 className="text-2xl font-bold">Company Profile</h3>
            <span className="text-blue-600 font-semibold">ARATCO</span>
          </div>

          <ul className="space-y-4">
            {companyDetails.map((detail, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-start md:items-start justify-start gap-4 border-b pb-2"
              >
                <span className="font-semibold text-gray-800 min-w-28">
                  {detail.title}
                </span>
                <span className="text-gray-700 flex justify-start items-center">
                  {detail.value}
                  {detail.phone && (
                    <span className="ml-4 flex justify-start items-center">
                      {detail.phone.map((phone, i) => (
                        <span
                          key={i}
                          className="ml-2 text-gray-600 font-medium flex justify-start items-center gap-1"
                        >
                          <PhoneIcon width={18} /> {phone}
                        </span>
                      ))}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <GetInTouch />
    </>
  );
}

GBLProfile.getLayout = function getLayout(page) {
  return <InnerPageLayout title="GBL Profile">{page}</InnerPageLayout>;
};
