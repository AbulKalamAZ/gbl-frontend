import PhoneIcon from "@/components/icons/PhoneIcon";
import SectionHeader from "@/components/SectionHeader";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function RestaurantsCoffeeShopsPage() {
  const restaurantsdata = [
    { id: 1, imageSrc: "/restaurant/1.jpg", title: "image_1" },
    { id: 2, imageSrc: "/restaurant/2.jpg", title: "image_2" },
    { id: 3, imageSrc: "/restaurant/3.jpg", title: "image_3" },
    { id: 4, imageSrc: "/restaurant/4.jpg", title: "image_4" },
    { id: 5, imageSrc: "/restaurant/5.jpg", title: "image_5" },
    { id: 6, imageSrc: "/restaurant/6.jpg", title: "image_6" },
    { id: 7, imageSrc: "/restaurant/7.jpg", title: "image_7" },
    { id: 8, imageSrc: "/restaurant/8.jpg", title: "image_8" },
    { id: 9, imageSrc: "/restaurant/9.jpg", title: "image_9" },
    { id: 10, imageSrc: "/restaurant/10.jpg", title: "image_10" },
    { id: 12, imageSrc: "/restaurant/12.jpg", title: "image_12" },
    { id: 13, imageSrc: "/restaurant/13.jpg", title: "image_13" },
    { id: 14, imageSrc: "/restaurant/14.jpg", title: "image_14" },
    { id: 15, imageSrc: "/restaurant/15.jpg", title: "image_15" },
    { id: 16, imageSrc: "/restaurant/16.jpg", title: "image_16" },
    { id: 17, imageSrc: "/restaurant/17.jpg", title: "image_17" },
    { id: 18, imageSrc: "/restaurant/18.jpg", title: "image_18" },
    { id: 19, imageSrc: "/restaurant/19.jpg", title: "image_19" },
    { id: 20, imageSrc: "/restaurant/20.jpg", title: "image_20" },
    { id: 21, imageSrc: "/restaurant/21.jpg", title: "image_21" },
    { id: 22, imageSrc: "/restaurant/22.jpg", title: "image_22" },
    { id: 23, imageSrc: "/restaurant/23.jpg", title: "image_23" },
  ];

  const chikHut = [
    { id: 1, imageSrc: "/restaurant/chick-1.jpg", title: "image_1" },
    { id: 2, imageSrc: "/restaurant/chick-2.jpg", title: "image_2" },
    { id: 3, imageSrc: "/restaurant/chick-3.jpg", title: "image_3" },
    { id: 4, imageSrc: "/restaurant/chick-4.jpg", title: "image_4" },
    { id: 5, imageSrc: "/restaurant/chick-5.jpg", title: "image_5" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Restaurants & Coffee Shops</title>
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
          {restaurantsdata.map(({ id, imageSrc, title }) => (
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

        <div className="chik-hut">
          <SectionHeader content="Restaurants" />

          <h2 className="text-3xl font-bold mb-4">Chick Hut</h2>

          <div
            className="image-container masonry-layout gap-6 py-4 mb-12"
            style={{
              columnCount: 3 /* Number of columns */,
              columnGap: "1.5rem" /* Matches Tailwind's gap-6 */,
            }}
          >
            {chikHut.map(({ id, imageSrc, title }) => (
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
            <h4 className="text-lg font-bold">Nabeel Erakkodan</h4>
            <p className="text-primary">In Charge Restaurants & Coffee Shops</p>
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

RestaurantsCoffeeShopsPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Restaurants & Coffee Shops">
      {page}
    </OtherBusinessLayout>
  );
};
