import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function SisterConcernPage() {
  const logos = [
    "/sisters/1.jpg",
    "/sisters/2.jpg",
    "/sisters/3.jpg",
    "/sisters/4.jpg",
    "/sisters/5.jpg",
    "/sisters/6.jpg",
    "/sisters/7.jpg",
    "/sisters/8.jpg",
    "/sisters/9.jpg",
  ];
  return (
    <>
      <Head>
        <title>GBL - Sister Concerns</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={250}
            height={250}
            className="object-contain"
            priority={index < 4}
          />
        ))}
      </div>
    </>
  );
}

SisterConcernPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Sister Concerns">{page}</InnerPageLayout>;
};
