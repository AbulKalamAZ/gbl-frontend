import PhoneIcon from "@/components/icons/PhoneIcon";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function FurnitureShiftingpage() {
  const furnitureData = [
    { id: 1, imageSrc: "/furniture/1.jpg", title: "image_1" },
    { id: 2, imageSrc: "/furniture/2.jpg", title: "image_2" },
    { id: 3, imageSrc: "/furniture/3.jpg", title: "image_3" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Furniture Shifting</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="data-container">
        <div
          className="image-container masonry-layout gap-6 py-4 mb-12"
          style={{
            columnCount: 3 /* Number of columns */,
            columnGap: "1.5rem" /* Matches Tailwind's gap-6 */,
          }}
        >
          {furnitureData.map(({ id, imageSrc, title }) => (
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

        {/* contact */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Faraj Moosa</h4>
            <p className="text-primary">Furniture Shifting Services</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span>055 827 6249</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

FurnitureShiftingpage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Furniture Shifting">{page}</OtherBusinessLayout>
  );
};
