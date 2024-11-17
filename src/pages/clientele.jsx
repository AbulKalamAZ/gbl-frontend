import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function ClientelePage() {
  const logos = [
    "/clients/anabeeb.png",
    "/clients/aytb.png",
    "/clients/bonatti.png",
    "/clients/cinopec.png",
    "/clients/ctci.png",
    "/clients/enppi.png",
    "/clients/hundai.png",
    "/clients/jeong.png",
    "/clients/larsen.png",
    "/clients/nsh.png",
    "/clients/posco.png",
    "/clients/saipemm.png",
    "/clients/samsung.png",
    "/clients/sendan.png",
    "/clients/sepco.png",
    "/clients/sepco3.png",
    "/clients/yamama.png",
  ];

  return (
    <>
      <Head>
        <title>GBL - Clientele</title>
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
            priority={index < 4} // Preload first few images for better performance
          />
        ))}
      </div>
    </>
  );
}

ClientelePage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Clientele">{page}</InnerPageLayout>;
};
