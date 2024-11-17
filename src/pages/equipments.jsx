import AdminCard from "@/components/AdminCard";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SectionHeader from "@/components/SectionHeader";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";

export default function EquipmentPage() {
  const equipmentData = [
    {
      id: "service-1",
      title: "Equipped Ambulances",
      imageSrc: "/equipment/1.jpg",
    },
    {
      id: "service-2",
      title: "Diesel Tankers",
      imageSrc: "/equipment/3.jpg",
    },
    {
      id: "service-3",
      title: "Water Tankers",
      imageSrc: "/equipment/19.jpg",
    },
    {
      id: "service-4",
      title: "Dyna Trucks",
      imageSrc: "/equipment/2.jpg",
    },
    {
      id: "service-5",
      title: "Dump Trucks",
      imageSrc: "/equipment/5.jpg",
    },
    {
      id: "service-6",
      title: "Flat Trailers",
      imageSrc: "/equipment/4.jpg",
    },
    {
      id: "service-7",
      title: "Forklifts",
      imageSrc: "/equipment/7.jpg",
    },
    {
      id: "service-8",
      title: "Man Lifts",
      imageSrc: "/equipment/20.jpg",
    },
    {
      id: "service-9",
      title: "Bobcats",
      imageSrc: "/equipment/8.jpg",
    },
    {
      id: "service-10",
      title: "Boom Trucks",
      imageSrc: "/equipment/6.jpg",
    },
    {
      id: "service-11",
      title: "Cranes",
      imageSrc: "/equipment/21.jpg",
    },
    {
      id: "service-12",
      title: "Scissor Lifts",
      imageSrc: "/equipment/9.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Equiments</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="data-container">
        <SectionHeader content="GBL is a holding Company, which can arrange listed equipment upon demand. Category list as follows" />

        <div className="equipment-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {equipmentData.map(({ id, title, imageSrc }) => {
            return <AdminCard key={id} title={title} imageSrc={imageSrc} />;
          })}
        </div>

        {/* contact */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Shabeer Aboo</h4>
            <p className="text-primary">Equipments</p>
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

EquipmentPage.getLayout = function getLayout(page) {
  return <OtherBusinessLayout title="Equiments">{page}</OtherBusinessLayout>;
};
