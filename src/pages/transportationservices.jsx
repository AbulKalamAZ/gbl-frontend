import PhoneIcon from "@/components/icons/PhoneIcon";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function TransportationServicePage() {
  const transportItems = [
    {
      id: 1,
      title: "Truck Transportation Services",
      imageSrc: "/transport/1.jpg",
    },
    {
      id: 2,
      title: "Container Truck",
      imageSrc: "/transport/2.jpg",
    },
    {
      id: 3,
      title: "Passenger Transportation Services",
      imageSrc: "/transport/3.jpg",
    },
    {
      id: 4,
      title: "Passenger Transportation Services",
      imageSrc: "/transport/4.jpg",
    },
    {
      id: 5,
      title: "Passenger Transportation Services",
      imageSrc: "/transport/5.jpg",
    },
    {
      id: 6,
      title: "Passenger Transportation Services",
      imageSrc: "/transport/6.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Transportation Service</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="data-container">
        <div className="image-container grid grid-cols-1 sm:grid-cols-2 gap-12 py-4">
          {transportItems.map(({ id, imageSrc }) => (
            <div
              key={id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <Image
                src={imageSrc}
                alt={id}
                width={220}
                height={220}
                className="w-full h-auto object-fit"
              />
            </div>
          ))}
        </div>

        {/* contact */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Rinshad</h4>
            <p className="text-primary">Transportation Services</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span> 050 779 2686</span>
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

TransportationServicePage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Transportation Service">
      {page}
    </OtherBusinessLayout>
  );
};
