import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function ProjectPage() {
  const projectImages = [
    "/projects/1.png",
    "/projects/2.png",
    "/projects/3.png",
    "/projects/4.png",
    "/projects/5.png",
    "/projects/6.png",
    "/projects/7.png",
    "/projects/8.png",
    "/projects/9.png",
    "/projects/10.png",
    "/projects/11.png",
    "/projects/12.png",
    "/projects/13.png",
    "/projects/14.png",
    "/projects/15.png",
    "/projects/16.png",
    "/projects/17.png",
    "/projects/18.png",
    "/projects/19.png",
    "/projects/20.png",
    "/projects/21.png",
    "/projects/22.png",
    "/projects/23.png",
    "/projects/24.png",
    "/projects/25.png",
    "/projects/26.png",
    "/projects/27.png",
    "/projects/28.png",
    "/projects/29.png",
    "/projects/30.png",
    "/projects/31.png",
    "/projects/32.png",
    "/projects/33.png",
    "/projects/34.png",
    "/projects/35.png",
    "/projects/36.png",
    "/projects/37.png",
    "/projects/38.png",
    "/projects/39.png",
    "/projects/40.png",
  ];

  return (
    <>
      <Head>
        <title>GBL - Projects</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4">
        {projectImages.map((logo, index) => (
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

ProjectPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Projects">{page}</InnerPageLayout>;
};
