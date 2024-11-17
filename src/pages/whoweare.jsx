import SectionHeader from "@/components/SectionHeader";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";
import ChairmanImg from "../../public/chairman.png";
import ClipboardIcon from "../../public/icons/clipboard.png";
import EngineerIcon from "../../public/icons/engineer.png";
import GrowthIcon from "../../public/icons/growth.png";
import IntroImg from "../../public/whoweare-intro-pic.png";

export default function WhoWeArePage() {
  return (
    <>
      <Head>
        <title>GBL - Who We Are</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, a GBL vendor code registration holding company."
        />
      </Head>

      {/* Description */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="image-wrapper col-span-1 md:col-span-4 order-2 md:order-1 py-8">
            <Image
              src={IntroImg}
              alt="Intro image"
              className="relative rounded-lg before:absolute before:left-0 before:top-0 before:w-[40%] before:h-[100%] before:bg-slate-700"
            />
          </div>

          <div className="content-wrapper col-span-1 md:col-span-8 order-1 md:order-2 py-8">
            <SectionHeader content="GBL" />

            <h2 className="text-lg lg:text-xl font-bold mb-6">
              GBL (Glow Batel Limited) is a leading Manpower Support Service
              provider with its Main Office in Yanbu (Saudi Arabia) with its
              operation in Yanbu, Rabigh, Jeddah, Riyad, Jubail, Jizan, Red Sea,
              Amala, NEOM, and overseas offices in Bahrain & UAE.
            </h2>

            <div className="mb-6">
              <p className="body-2 mb-4">
                <strong>GBL</strong> is now a diversified conglomerate mainly
                operating in <strong>Manpower Support Services</strong> for
                Petrochemical, Oil & Gas, and Power & Utility Projects
                throughout Saudi Arabia, Bahrain, and UAE.
              </p>

              <p className="body-2 mb-4">
                <strong>GBL</strong> started from humble beginnings in the
                2010’s, and under the leadership of{" "}
                <strong>
                  Mr. Mahir Dehais Al Refaei, Chairman and Managing Director,
                  GBL
                </strong>{" "}
                has now grown to over 12 well-managed Business Units.
              </p>

              <p className="body-2 mb-4">
                We are dedicated to Quality, Service, and Value. Our reputation
                and reliability in the industry have made us well-respected. We
                aim to satisfy our valued clients and meet their specific
                requirements through a highly professional marketing team in all
                branches/divisions and a well-structured management team.
              </p>

              <p className="body-2 mb-4">
                Our motto is <strong>“SERVICE ON THE REACH”</strong>. Our
                Marketing Team is available at all times to help complete valued
                projects on schedule. In the competitive international arena, we
                maintain high-quality standards in our dealings with clients,
                customers, suppliers, and employees. We are happy to provide
                competitive pricing and quality service.
              </p>
            </div>

            <div className="info-data-wrapper flex flex-col md:flex-row gap-10 lg:gap-20 mb-8">
              <div className="item flex flex-col items-center md:items-start gap-2 md:gap-6">
                <Image
                  src={GrowthIcon}
                  alt="Growth icon"
                  className="w-12 md:w-16 h-12 md:h-16"
                />
                <div className="text-center md:text-left">
                  <span className="block font-extrabold text-primary text-4xl md:text-5xl">
                    11
                  </span>
                  <span className="body-2">Years of Services</span>
                </div>
              </div>
              <div className="item flex flex-col items-center md:items-start gap-2 md:gap-6">
                <Image
                  src={EngineerIcon}
                  alt="Engineer icon"
                  className="w-12 md:w-16 h-12 md:h-16"
                />
                <div className="text-center md:text-left">
                  <span className="block font-extrabold text-primary text-4xl md:text-5xl">
                    192
                  </span>
                  <span className="body-2">Happy Clients</span>
                </div>
              </div>
              <div className="item flex flex-col items-center md:items-start gap-2 md:gap-6">
                <Image
                  src={ClipboardIcon}
                  alt="Clipboard icon"
                  className="w-12 md:w-16 h-12 md:h-16"
                />
                <div className="text-center md:text-left">
                  <span className="block font-extrabold text-primary text-4xl md:text-5xl">
                    50
                  </span>
                  <span className="body-2">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FDF6EB] px-2 py-4 md:p-16 lg:px-24 flex flex-col md:flex-row items-start gap-8">
        <div className="flex-shrink-0 w-full md:w-48 h-auto mb-4 md:mb-0">
          <Image
            src={ChairmanImg}
            alt="Chairman"
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Chairman’s Message
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to <strong>GBL</strong>’s global website; within these
            pages, you will learn more about our history, accomplishments, and
            the services we offer. You will also find out about the vision,
            mission, policies, and values of our institution, which has been
            committed to helping the industry meet its service aspirations since
            its establishment in 2010.
          </p>
          <p className="text-gray-700 mb-4">
            This commitment has paved the way for <strong>GBL</strong>’s
            journey, growing into one of the largest support service providers
            in KSA, with operations across the Kingdom and several divisions
            spanning three GCC countries.
          </p>
          <p className="text-gray-700 mb-4">
            We are proud of our achievements and are focused on sustainable
            growth. GBL’s most valuable asset is its people, and we will
            continue to strengthen and empower them as they drive our
            operations. We are dedicated to our customers, clients, employees,
            and communities.
          </p>
          <p className="text-gray-700 mb-4">
            GBL is committed to maintaining the highest standards of excellence
            in industrial support services based on sustainable growth and
            development.
          </p>
          <p className="text-gray-700 mb-6">
            Once again, welcome to our website.
          </p>
          <div>
            <p className="font-bold">Mahir Dehais Al Refaei</p>
            <p>Chairman & Managing Director</p>
          </div>
        </div>
      </section>
    </>
  );
}

WhoWeArePage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Who We Are">{page}</InnerPageLayout>;
};
