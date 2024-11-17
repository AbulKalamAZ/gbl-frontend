import PrimaryButton from "@/components/PrimaryButton";
import SectionHeader from "@/components/SectionHeader";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function CampCateringPage() {
  const campImages = [
    {
      id: 1,
      imageSrc: "/camp/1.jpg",
    },
    {
      id: 2,
      imageSrc: "/camp/2.jpg",
    },
    {
      id: 3,
      imageSrc: "/camp/3.jpg",
    },
    {
      id: 4,
      imageSrc: "/camp/4.jpg",
    },
  ];

  const jizanImages = [
    {
      id: 1,
      imageSrc: "/camp/5.jpg",
    },
    {
      id: 2,
      imageSrc: "/camp/6.jpg",
    },
    {
      id: 3,
      imageSrc: "/camp/7.jpg",
    },
    {
      id: 4,
      imageSrc: "/camp/8.jpg",
    },
    {
      id: 5,
      imageSrc: "/camp/9.jpg",
    },
    {
      id: 6,
      imageSrc: "/camp/10.jpg",
    },
    {
      id: 7,
      imageSrc: "/camp/11.jpg",
    },
    {
      id: 8,
      imageSrc: "/camp/12.jpg",
    },
    {
      id: 10,
      imageSrc: "/camp/14.jpg",
    },
  ];

  const campmanager = [
    {
      id: 1,
      name: "Muhammed Ali",
      title: "Yanbu Toyota Camp Manager",
      phone: "056 281 8921",
      email: "gblcampcateringyanbu@gblgroupksa.com",
    },
    {
      id: 2,
      name: "Yasir Mukhtar",
      title: "Yanbu Mojel Camp Manager",
      phone: " 054 907 7882",
      email: "gblcampcateringyanbu@gblgroupksa.com",
    },
    {
      id: 3,
      name: "Sadiq Nambikkunnan",
      title: "Yanbu Camp & Catering Services",
      phone: " 054 271 1416",
      email: "gblcampcateringyanbu@gblgroupksa.com",
    },
  ];

  const jizanmanager = [
    {
      id: 1,
      name: "Rabeesh VK",
      title: "Camp Services, Jizan",
      phone: "055 088 4566",
      email: "jizancamp@gblgroupksa.com",
    },
    {
      id: 2,
      name: "Dhahir Jainalaudeen",
      title: "Catering Services, Jizan",
      phone: "054 331 2805",
      email: "jizancamp@gblgroupksa.com",
    },
    {
      id: 3,
      name: "Abdul Aziz Thalapadi",
      title: "Area Manager Outdoor Catering Services - Jizan",
      phone: "050 9382 204",
      email: "jizancamp@gblgroupksa.com",
    },
  ];
  return (
    <>
      <Head>
        <title>GBL - Camp & Catering</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      {/* Yanbu Camp */}

      <div className="cam-container mb-12">
        <div className="top-section bg-gray-200 py-4 px-8 rounded-md shadow-sm">
          <SectionHeader content="Camp & Catering" />

          <h2 className="text-3xl font-bold mb-4">Yanbu Camp</h2>

          <p className="text-lg mb-2">
            This division of GBL camp in Yanbu having 6 categories. Includes
            various staff categories from expats to laborers of various
            nationalities.
          </p>

          <p className="text-sm">
            GBL camp is well-secured with surveillance cameras and 24-hour
            security personnel services. The meals of the residents in our camps
            are served in separate mess halls, one for the junior staff and one
            for the senior staff, Meals for expat guests are served in our expat
            restaurants with continental menus. Housekeeping, janitorial and
            laundry services can also be availed of for all the residents of our
            camps. Several sports and recreational facilities are likewise
            provided in our camp like individual satellite TV connections for
            senior and expat rooms and TV viewing rooms for the junior and rank
            and file staffs. Indoor and outdoor sports facilities are provided
            as well.
          </p>
        </div>

        <div className="image-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {campImages.map(({ id, imageSrc }) => (
            <div
              key={id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <Image
                src={imageSrc}
                alt={`Image ${id + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="brochure bg-gray-200 px-6 py-12 ">
          <p className="text-3xl font-bold leading-10 mb-4">
            Our Catering division specializes in industrial catering services
            and is manned by highly-qualified personnel
          </p>
          <PrimaryButton content="Download Brochure" />
        </div>

        <div className="manager-contact grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {campmanager.map(({ id, name, title, phone, email }) => (
            <div
              key={id}
              className="overflow-hidden px-2 py-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-lg text-center font-semibold text-gray-900">
                {name}
              </h3>
              <p className="text-sm text-center text-gray-600">{title}</p>

              <p className="text-sm text-center text-gray-600">
                <span className="block">{phone}</span>
              </p>
              <p className="text-sm text-center text-blue-500">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Jizan Camp */}
      <div className="cam-container mb-12">
        <div className="top-section bg-gray-200 py-4 px-8 rounded-md shadow-sm">
          <SectionHeader content="Camp & Catering" />

          <h2 className="text-3xl font-bold mb-4">Jizan Camp</h2>

          <p className="text-lg mb-2">
            GBL Camp & Catering division is one of the leading supporting teams
            for Camp & Catering services in the Kingdom. We are delighted to
            introduce ourselves as one of the quality service providers for
            regional and multinational companies like yours at locations
            including remote areas. Also we have accredited an ISO 22000:2005
            certification in preparation and serving of ready to eat food and
            beverages in Banquet hall and prepared food transportation services
            at client location. We provide food and accommodation services for
            all categories from senior staff members to labors considering that
            they are the strength of any company and their satisfaction is our
            motto.
          </p>

          <p className="text-sm mb-2">
            Camp & Catering was started as a division of GBL by veterans in the
            industry who had worked with reputed firms like Alsuwaidi Services
            (SSC), Nadec, Saudi catering and Zamil Catering etc. Our view is to
            provide quality service as per the requirement of our valued
            clients. In the run we are catering now to multinational and leading
            companies such as SUNGCHANG, SEPCO ARABIA, FACE, AAMCO, AL YAMAMA,
            MR AL KATHLAN, CCE, AL BAWANI, TABLE FOUR & EXELONE. Our Jizan camp
            located in Al Abadila & Manzala has a capacity of 800 people.
            Another nearby project is taking shape in Manzala (Opposite side of
            Jizan Royal Commission Project) capacity of 1500 peoples for Junior
            to Senior accommodations depending on the requirements.
          </p>
          <p className="text-sm">
            GBL already has ARAMCO vendor registration (10053533) for our
            various operations & services. Also we got special appreciation
            certificates from our various customers for our professional
            approach and services towards their requirements fulfilled by GBL.
            Hence we are committed to serve you with utmost professionalism.
          </p>
        </div>

        <div className="image-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {jizanImages.map(({ id, imageSrc }) => (
            <div
              key={id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <Image
                src={imageSrc}
                alt={`Image ${id + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="manager-contact grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {jizanmanager.map(({ id, name, title, phone, email }) => (
            <div
              key={id}
              className="overflow-hidden px-2 py-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-lg text-center font-semibold text-gray-900">
                {name}
              </h3>
              <p className="text-sm text-center text-gray-600">{title}</p>

              <p className="text-sm text-center text-gray-600">
                <span className="block">{phone}</span>
              </p>
              <p className="text-sm text-center text-blue-500">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

CampCateringPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Camp & Catering">{page}</OtherBusinessLayout>
  );
};
