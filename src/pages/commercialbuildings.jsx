import PhoneIcon from "@/components/icons/PhoneIcon";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function CommercialBuildingsPage() {
  const commercialData = [
    {
      id: "service-1",
      title: "Trading Shop",
      imageSrc: "/commercial/1.jpg",
    },
    {
      id: "service-2",
      title: "Trading Shop",
      imageSrc: "/commercial/2.jpg",
    },
    {
      id: "service-3",
      title: "Trading Shop",
      imageSrc: "/commercial/3.jpg",
    },
    {
      id: "service-4",
      title: "Trading Shop",
      imageSrc: "/commercial/4.jpg",
    },
    {
      id: "service-5",
      title: "Trading Shop",
      imageSrc: "/commercial/5.jpg",
    },
    {
      id: "service-6",
      title: "Trading Shop",
      imageSrc: "/commercial/6.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Trading Division</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="data-container">
        <div className="image-container grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          {commercialData.map(({ id, imageSrc }) => (
            <div
              key={id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <Image
                src={imageSrc}
                alt={id}
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* contact */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Nabeel Erakkodan</h4>
            <p className="text-primary">Commercial Buildings</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span>056 882 7882</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

CommercialBuildingsPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Commercial Buildings">
      {page}
    </OtherBusinessLayout>
  );
};
