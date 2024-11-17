import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function MissionPage() {
  return (
    <>
      <Head>
        <title>GBL - Mission</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="relative bg-gray-300 h-64 w-100 max-w-full rounded-lg shadow-lg ">
              <Image
                src={"/mission.jpg"}
                width={400}
                height={250}
                alt="vision banner"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-12 -right-8 bg-white shadow-lg rounded-lg pl-4 pr-8">
                <p className="relative text-[84px] font-bold text-black">
                  7<span className="text-2xl absolute top-4">+</span>
                </p>
                <p className="text-sm relative left-3 bottom-5 text-gray-700 font-medium">
                  Branches
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold text-black mb-4">Mission</h2>
            <p className="text-gray-700 text-sm leading-6 mb-4">
              To be the prominent provider of qualified support services by
              consistently improving the quality of our services, to add value
              for clients through innovation, foresight, integrity and
              aggressive performance; and to serve with character and purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

MissionPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Mission">{page}</InnerPageLayout>;
};
