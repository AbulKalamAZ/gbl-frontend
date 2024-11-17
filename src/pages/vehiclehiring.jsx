import AdminCard from "@/components/AdminCard";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SectionHeader from "@/components/SectionHeader";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";

export default function VehiclePage() {
  const vehicles = [
    {
      id: 1,
      title: "Pickups",
      imageSrc: "/vehicle/13.jpg",
    },
    {
      id: 2,
      title: "14 Seated Vans",
      imageSrc: "/vehicle/14.jpg",
    },
    {
      id: 3,
      title: "15 Seated Luxury Vans",
      imageSrc: "/vehicle/15.jpg",
    },
    {
      id: 4,
      title: "Sedan Cars",
      imageSrc: "/vehicle/12.jpg",
    },
    {
      id: 5,
      title: "SUVs",
      imageSrc: "/vehicle/11.jpg",
    },
    {
      id: 6,
      title: "Luxury Cars",
      imageSrc: "/vehicle/10.jpg",
    },
    {
      id: 7,
      title: "Coasters",
      imageSrc: "/vehicle/16.jpg",
    },
    {
      id: 8,
      title: "A/C Air Buses",
      imageSrc: "/vehicle/18.jpg",
    },
    {
      id: 9,
      title: "Non A/C Buses",
      imageSrc: "/vehicle/17.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Vehicle Hiring</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="data-container">
        <SectionHeader content="GBL is a holding Company, which have more than 40 vehicles under direct Ownership. Category list as follows" />

        <div className="equipment-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {vehicles.map(({ id, title, imageSrc }) => {
            return <AdminCard key={id} title={title} imageSrc={imageSrc} />;
          })}
        </div>

        {/* contact */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Shabeer Aboo</h4>
            <p className="text-primary">Vehicle Hiring</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span> 050 757 7882</span>
            </p>
            <p className="text-gray-800">
              ✉️{" "}
              <a href="mailto:info@rehabgroupksa.com" className="text-gray-800">
                info@rehabgroupksa.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

VehiclePage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Vehicle Hiring">{page}</OtherBusinessLayout>
  );
};
