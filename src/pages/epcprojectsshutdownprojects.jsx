import SectionHeader from "@/components/SectionHeader";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function EPCProjectsShutdownProjectsPage() {
  const mefImages = [
    { id: 1, imageSrc: "/epc/1.jpg", title: "image_1" },
    { id: 2, imageSrc: "/epc/2.jpg", title: "image_2" },
    { id: 3, imageSrc: "/epc/3.jpg", title: "image_3" },
    { id: 4, imageSrc: "/epc/4.jpg", title: "image_4" },
    { id: 5, imageSrc: "/epc/5.jpg", title: "image_5" },
    { id: 6, imageSrc: "/epc/6.jpg", title: "image_6" },
    { id: 7, imageSrc: "/epc/7.jpg", title: "image_7" },
    { id: 8, imageSrc: "/epc/8.jpg", title: "image_8" },
    { id: 9, imageSrc: "/epc/9.jpg", title: "image_9" },
    { id: 10, imageSrc: "/epc/10.jpg", title: "image_10" },
    { id: 12, imageSrc: "/epc/12.jpg", title: "image_12" },
    { id: 13, imageSrc: "/epc/13.jpg", title: "image_13" },
    { id: 14, imageSrc: "/epc/14.jpg", title: "image_14" },
    { id: 15, imageSrc: "/epc/15.jpg", title: "image_15" },
    { id: 16, imageSrc: "/epc/16.jpg", title: "image_16" },
    { id: 17, imageSrc: "/epc/17.jpg", title: "image_17" },
    { id: 18, imageSrc: "/epc/18.jpg", title: "image_18" },
    { id: 19, imageSrc: "/epc/19.jpg", title: "image_19" },
    { id: 20, imageSrc: "/epc/20.jpg", title: "image_20" },
    { id: 21, imageSrc: "/epc/21.jpg", title: "image_21" },
    { id: 22, imageSrc: "/epc/22.jpg", title: "image_22" },
    { id: 23, imageSrc: "/epc/23.jpg", title: "image_23" },
    { id: 24, imageSrc: "/epc/24.jpg", title: "image_24" },
    { id: 25, imageSrc: "/epc/25.jpg", title: "25" },
  ];

  const tamkImages = [
    { id: 1, imageSrc: "/epc/tamk-1.jpg", title: "tamk_image_1" },
    { id: 2, imageSrc: "/epc/tamk-2.jpg", title: "tamk_image_2" },
    { id: 3, imageSrc: "/epc/tamk-3.jpg", title: "tamk_image_3" },
    { id: 4, imageSrc: "/epc/tamk-4.jpg", title: "tamk_image_4" },
    { id: 5, imageSrc: "/epc/tamk-5.jpg", title: "tamk_image_5" },
    { id: 6, imageSrc: "/epc/tamk-6.jpg", title: "tamk_image_6" },
    { id: 7, imageSrc: "/epc/tamk-7.jpg", title: "tamk_image_7" },
    { id: 8, imageSrc: "/epc/tamk-8.jpg", title: "tamk_image_8" },
    { id: 9, imageSrc: "/epc/tamk-9.jpg", title: "tamk_image_9" },
    { id: 10, imageSrc: "/epc/tamk-10.jpg", title: "tamk_image_10" },
    { id: 12, imageSrc: "/epc/tamk-12.jpg", title: "tamk_image_12" },
    { id: 13, imageSrc: "/epc/tamk-13.jpg", title: "tamk_image_13" },
    { id: 14, imageSrc: "/epc/tamk-14.jpg", title: "tamk_image_14" },
  ];

  return (
    <>
      <Head>
        <title>GBL - EPC Projects & Shutdown Projects</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      {/* MEF project */}

      <div className="cam-container mb-12">
        <div className="top-section bg-gray-200 py-4 px-8 rounded-md shadow-sm">
          <SectionHeader content="EPC Projects & Shutdown Project" />

          <h2 className="text-3xl font-bold mb-4">
            Military Explosive Factory (MEF)Project
          </h2>

          <p className="text-lg mb-2">
            Project Name:- Military Explosive Factory (MEF)Project
            <br />
            Client Name:- Saudi Chemical Company
            <br />
            Contractor Name:- UNIGAARB
            <br />
            Sub contractor Name :- Al Rehab Trading & Contracting Company Ltd
          </p>
        </div>

        <div className="mef-image-container">
          {/* MEF images */}
          <div
            className="image-container masonry-layout gap-6 py-4 mb-12"
            style={{
              columnCount: 2 /* Number of columns */,
              columnGap: "1.5rem" /* Matches Tailwind's gap-6 */,
            }}
          >
            {mefImages.map(({ id, imageSrc, title }) => (
              <div
                key={id}
                className="break-inside-avoid overflow-hidden rounded-md shadow-md hover:shadow-lg cursor-pointer mb-6"
                style={{ breakInside: "avoid" }}
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  className="w-full h-auto object-cover"
                  layout="intrinsic"
                  width={220}
                  height={220}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RTW part */}
      <div className="top-section bg-gray-200 py-4 px-8 rounded-md shadow-sm">
        <SectionHeader content="EPC Projects & Shutdown Project" />

        <h2 className="text-3xl font-bold mb-4">Riyadh Tank Works</h2>
      </div>

      <div className="mef-image-container">
        {/* MEF images */}
        <div
          className="image-container masonry-layout gap-6 py-4 mb-12"
          style={{
            columnCount: 2 /* Number of columns */,
            columnGap: "1.5rem" /* Matches Tailwind's gap-6 */,
          }}
        >
          {tamkImages.map(({ id, imageSrc, title }) => (
            <div
              key={id}
              className="break-inside-avoid overflow-hidden rounded-md shadow-md hover:shadow-lg cursor-pointer mb-6"
              style={{ breakInside: "avoid" }}
            >
              <Image
                src={imageSrc}
                alt={title}
                className="w-full h-auto object-cover"
                layout="intrinsic"
                width={220}
                height={220}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="cam-container mb-12">
        <div className="manager-contact grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="overflow-hidden px-2 py-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-lg text-center font-semibold text-gray-900">
              Madhavan Chendatta
            </h3>
            <p className="text-sm text-center text-gray-600">
              EPC Projects & Shutdown Projects
            </p>

            <p className="text-sm text-center text-gray-600">
              <span className="block">053 013 9703</span>
            </p>
            <p className="text-sm text-center text-blue-500">
              <a href={`mailto:info@rehabgroupksa.com`}>
                info@rehabgroupksa.com
              </a>
            </p>
          </div>

          <div className="overflow-hidden px-2 py-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg cursor-pointer">
            <h3 className="text-lg text-center font-semibold text-gray-900">
              Jemshad K
            </h3>
            <p className="text-sm text-center text-gray-600">
              EPC Projects & Shutdown Projects
            </p>

            <p className="text-sm text-center text-gray-600">
              <span className="block">055 335 0882</span>
            </p>
            <p className="text-sm text-center text-blue-500">
              <a href={`mailto:info@rehabgroupksa.com`}>
                info@rehabgroupksa.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

EPCProjectsShutdownProjectsPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="EPC Projects & Shutdown Projects">
      {page}
    </OtherBusinessLayout>
  );
};
