import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function WhoIsWhoPage() {
  const contactsData = [
    {
      section: "Manpower Support Service",
      people: [
        {
          name: "Arjun Dev",
          title: "Jizan Region Manager",
          phone: ["053 696 9502"],
          email: "jizan@gblksa.com",
        },
        {
          name: "Nishqi Kannan",
          title: "Jizan Branch Manager",
          phone: ["054 661 2882"],
          email: "jizan@gblksa.com",
        },
        {
          name: "Muhammed Saad",
          title: "Rabigh Branch Manager",
          phone: ["054 149 882"],
          email: "rabigh@gblksa.com",
        },
        {
          name: "Rishalat Islam",
          title: "Jeddah Branch Manager",
          phone: ["054 661 7889"],
          email: "jeddah@gblksa.com",
        },
        {
          name: "Shafeek Ali",
          title: "Riyadh & Al Qassim Branch Manager",
          phone: ["054 166 0882"],
          email: "riyadh@gblksa.com",
        },
        {
          name: "Shibu Kunjumon",
          title: "Umlaj Branch Manager",
          phone: ["054 661 2882"],
          email: "umlaj@gblksa.com",
        },
        {
          name: "Shabeer Aboo",
          title: "Logistic Controller",
          phone: ["050 757 7882"],
        },
      ],
    },
    {
      section: "Camp & Catering Service Branches",
      people: [
        {
          name: "Sadiq Nambikkunnan",
          title: "Yanbu Camp & Catering Services",
          phone: ["054 271 1416"],
          email: "aratcocampcateringyanbu@gblksa.com",
        },
        {
          name: "Rabeesh VK",
          title: "Camp Services, Jizan",
          phone: ["055 088 4566"],
          email: "jizancamp@gblksa.com",
        },
        {
          name: "Dhahir Jainaludeen",
          title: "Catering Services, Jizan",
          phone: ["054 331 2805"],
          email: "jizancamp@gblksa.com",
        },
        {
          name: "Abdul Aziz Thalapadi",
          title: "Area Manager Outdoor Catering Services - Jizan",
          phone: ["050 9382 204"],
          email: "jizancamp@gblksa.com",
        },
      ],
    },
    {
      section: "Other Business Units",
      people: [
        {
          name: "Suneer Khan",
          title: "Star Hotels and Furnished Apartment Services",
          phone: ["054 661 0882"],
          email: "bndehaisapartments@gblksa.com",
        },
        {
          name: "Rinshad",
          title: "Transportation Services",
          phone: ["050 779 2686"],
          email: "info@gblksa.com",
        },
        {
          name: "Sharafudheen",
          title: "Country Manager – Trading",
          phone: ["050 535 3379"],
          email: "trading@gblksa.com",
        },
        {
          name: "Faisal Karattil",
          title: "Supermarkets & Groceries",
          phone: ["053 852 6051"],
          email: "info@gblksa.com",
        },
        {
          name: "Madhavan Chendatta",
          title: "EPC Projects & Shutdown Projects",
          phone: ["053 013 9703"],
          email: "info@gblksa.com",
        },
        {
          name: "Jemshad K",
          title: "EPC Projects & Shutdown Projects",
          phone: ["053 355 0882"],
          email: "info@gblksa.com",
        },
        {
          name: "Nabeel Erakkodan",
          title: "Restaurants & Coffee Shops",
          phone: ["056 882 7882"],
          email: "info@gblksa.com",
        },
        {
          name: "Nabeel Erakkodan",
          title: "Commercial Buildings",
          phone: ["056 882 7882"],
          email: "info@gblksa.com",
        },
        {
          name: "Nusral Islam",
          title: "Fruits & Vegetable Shops",
          phone: ["057 298 4273"],
          email: "info@gblksa.com",
        },
        {
          name: "Faraj Moosa",
          title: "Furniture Shifting Services",
          phone: ["055 827 6249"],
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Who is Who</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      {contactsData.map(({ section, people }, index) => {
        return <ContactSection key="index" section={section} people={people} />;
      })}
    </>
  );
}

const ContactSection = ({ section, people }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{section}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {people.map((person, index) => (
          <ContactCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

const ContactCard = ({ name, title, phone, email }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
      <h3 className="text-lg text-center font-semibold text-gray-900">
        {name}
      </h3>
      <p className="text-sm text-center text-gray-600">{title}</p>
      {phone && (
        <p className="text-sm text-center text-gray-600">
          {phone.map((num, index) => (
            <span key={index} className="block">
              {num}
            </span>
          ))}
        </p>
      )}
      {email && (
        <p className="text-sm text-center text-blue-500">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </div>
  );
};

WhoIsWhoPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Who is Who">{page}</InnerPageLayout>;
};
