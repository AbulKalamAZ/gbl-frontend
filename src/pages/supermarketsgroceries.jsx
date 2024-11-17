import PhoneIcon from "@/components/icons/PhoneIcon";
import OtherBusinessLayout from "@/layouts/OtherBusinessLayout";
import Head from "next/head";
import Image from "next/image";

export default function SupermarketsGroceriesPage() {
  const transportItems = [
    {
      id: 1,
      imageSrc: "/supermarket/1.jpg",
    },
    {
      id: 2,
      imageSrc: "/supermarket/2.jpg",
    },
    {
      id: 3,
      imageSrc: "/supermarket/3.jpg",
    },
    {
      id: 4,
      imageSrc: "/supermarket/4.jpg",
    },
    {
      id: 5,
      imageSrc: "/supermarket/5.jpg",
    },
    {
      id: 7,
      imageSrc: "/supermarket/7.jpg",
    },
    {
      id: 8,
      imageSrc: "/supermarket/8.jpg",
    },
    {
      id: 9,
      imageSrc: "/supermarket/9.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Supermarkets & Groceries</title>
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
            <h4 className="text-lg font-bold">Faisal Karattil</h4>
            <p className="text-primary">In Charge Supermarkets & Groceries</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span>053 852 6051</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

SupermarketsGroceriesPage.getLayout = function getLayout(page) {
  return (
    <OtherBusinessLayout title="Supermarkets & Groceries">
      {page}
    </OtherBusinessLayout>
  );
};
