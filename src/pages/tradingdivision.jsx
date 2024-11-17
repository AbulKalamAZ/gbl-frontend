import PhoneIcon from "@/components/icons/PhoneIcon";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function TradingDivisionPage() {
  const tradingData = [
    {
      id: "service-1",
      title: "Trading Shop",
      imageSrc: "/trading/1.jpg",
    },
    {
      id: "service-2",
      title: "Trading Shop",
      imageSrc: "/trading/2.jpg",
    },
    {
      id: "service-3",
      title: "Trading Shop",
      imageSrc: "/trading/3.jpg",
    },
    {
      id: "service-4",
      title: "Trading Shop",
      imageSrc: "/trading/4.jpg",
    },
    {
      id: "service-5",
      title: "Trading Shop",
      imageSrc: "/trading/5.jpg",
    },
    {
      id: "service-6",
      title: "Trading Shop",
      imageSrc: "/trading/6.jpg",
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
        <div className="equipment-container">
          <div
            className="image-container masonry-layout gap-6 py-4 mb-12"
            style={{
              columnCount: 3 /* Number of columns */,
              columnGap: "1.5rem" /* Matches Tailwind's gap-6 */,
            }}
          >
            {tradingData.map(({ id, imageSrc, title }) => (
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

        {/* contact */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Sharafudheen</h4>
            <p className="text-primary">Country Manager – Trading</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span>050 535 3379</span>
            </p>
            <p className="text-gray-800">
              ✉️{" "}
              <a
                href="mailto:trading@rehabgroupksa.com"
                className="text-gray-800"
              >
                trading@rehabgroupksa.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

TradingDivisionPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Trading Division">{page}</OtherBusinessLayout>
  );
};
