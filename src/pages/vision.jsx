import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function VisionPage() {
  return (
    <>
      <Head>
        <title>GBL - Vision</title>
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
                src={"/vision.jpg"}
                width={400}
                height={250}
                alt="vision banner"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-12 -right-8 bg-white shadow-lg rounded-lg pl-4 pr-8">
                <p className="relative text-[84px] font-bold text-black">
                  12<span className="text-2xl absolute top-4">+</span>
                </p>
                <p className="text-sm relative left-3 bottom-5 text-gray-700 font-medium">
                  Business Units
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold text-black mb-4">Vision</h2>
            <p className="text-gray-700 text-sm leading-6 mb-4">
              Empowering Clients by providing innovative quality solutions
              incorporating international best practices. To perform work for
              our valued clients and target projects, and to ensure necessary
              attention on each project we deal with.
            </p>
            <p className="text-gray-700 text-sm leading-6 mb-4">
              Our goal is to obtain our clients&apos; satisfaction by rendering
              the services in the most competitive price, with the highest
              quality of service, with stringent higher standards and within the
              schedule requirements.
            </p>
            <p className="text-black text-base font-semibold">
              Our philosophy remains client satisfaction driven rather than
              revenue driven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

VisionPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Vision">{page}</InnerPageLayout>;
};
