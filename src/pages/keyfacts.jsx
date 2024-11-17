import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";
import IntroImg from "/public/keyfact-pic.png";

export default function KeyFactsPage() {
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

  const facts = [
    {
      id: 1,
      logo: "/icons/trophy.png",
      text: "Leader in the market since established in 2010s",
    },
    {
      id: 2,
      logo: "/icons/location.png",
      text: "Head Quarters in Yanbu – Saudi Arabia",
    },
    {
      id: 3,
      logo: "/icons/chart.png",
      text: "Operation in almost all Industrial cities and projects of the Kingdom. Many divisions for Industrial Services, Hospitality and Consumables Global presence in UAE & Bahrain",
    },
    {
      id: 4,
      logo: "/icons/antivirus.png",
      text: "Grown now to 12 well managed business units",
    },
    {
      id: 5,
      logo: "/icons/engineer_blue.png",
      text: "More than 1000 satisfied employees",
    },
    {
      id: 6,
      logo: "/icons/deal.png",
      text: "192 Satisfied Clients",
    },
    {
      id: 7,
      logo: "/icons/clipboard_blue.png",
      text: "50 Projects",
    },
  ];

  return (
    <>
      <Head>
        <title>GBL - Key Facts</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="image-wrapper col-span-2">
          <Image
            src={IntroImg}
            alt="intro image"
            className="relative before:absolute before:left-0 before:top-0 before:w-[40%] before:h-[100%] before:bg-slate-700"
          />
        </div>

        <div className="fact-section col-span-3">
          <SectionHeader content="Key Facts" />

          <div className="facts-container space-y-8">
            {facts.map(({ id, logo, text }) => {
              return (
                <div
                  key={id}
                  className="fact-item flex justify-start items-center gap-5"
                >
                  <Image
                    src={logo}
                    alt="intro image"
                    width={40}
                    height={40}
                    className="relative"
                  />

                  <p className="text-lg font-semibold">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

KeyFactsPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Key Facts">{page}</InnerPageLayout>;
};
