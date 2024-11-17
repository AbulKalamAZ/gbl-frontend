import PhoneIcon from "@/components/icons/PhoneIcon";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function StarHotelsFurnishedApartmentsPage() {
  const hotelData = [
    {
      id: "service-1",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/1.jpg",
    },
    {
      id: "service-2",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/2.jpg",
    },
    {
      id: "service-3",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/3.jpg",
    },
    {
      id: "service-4",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/4.jpg",
    },
    {
      id: "service-5",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/5.jpg",
    },
    {
      id: "service-6",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/6.jpg",
    },
    {
      id: "service-7",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/7.jpg",
    },
    {
      id: "service-8",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/8.jpg",
    },
    {
      id: "service-9",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/9.jpg",
    },
    {
      id: "service-10",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/10.jpg",
    },
    {
      id: "service-11",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/11.jpg",
    },
    {
      id: "service-12",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/12.jpg",
    },
    {
      id: "service-13",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/13.jpg",
    },
    {
      id: "service-14",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/14.jpg",
    },
    {
      id: "service-15",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/15.jpg",
    },
    {
      id: "service-16",
      title: "Hotel & Apartments",
      imageSrc: "/hotel/16.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Star Hotels & Furnished Apartments</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="data-container">
        <div className="image-container grid grid-cols-1 sm:grid-cols-2 gap-12 py-4">
          {hotelData.map(({ id, imageSrc }) => (
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
            <h4 className="text-lg font-bold">Suneer Khan</h4>
            <p className="text-primary">
              Star Hotels and Furnished Apartment Services
            </p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span>054 661 0882</span>
            </p>
            <p className="text-gray-800">
              ✉️{" "}
              <a
                href="mailto:bindehaisapartments@gmail.com"
                className="text-gray-800"
              >
                bindehaisapartments@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

StarHotelsFurnishedApartmentsPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Commercial Buildings">
      {page}
    </OtherBusinessLayout>
  );
};
