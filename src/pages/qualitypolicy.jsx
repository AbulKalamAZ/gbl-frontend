import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function QualityPolicyPage() {
  return (
    <>
      <Head>
        <title>GBL - Quality Policy</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="relative bg-gray-300 h-112 w-100 max-w-full rounded-lg shadow-lg ">
              <Image
                src={"/quality-policy-banner.jpg"}
                width={360}
                height={450}
                alt="compnay-policy-banner"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-12 -right-8 bg-white shadow-lg rounded-lg pl-4 pr-8">
                <p className="relative text-[84px] font-bold text-black">
                  92<span className="text-2xl absolute top-4">+</span>
                </p>
                <p className="text-sm relative left-3 bottom-5 text-gray-700 font-medium">
                  Satisfied Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold text-black uppercase mb-4">
              Quality Policy
            </h2>
            <p className="text-gray-700 text-lg font-semibold leading-6 uppercase mb-4">
              &quot;TO MAINTAIN AND CONTINUALLY IMPROVE THE EFFECTIVENESS OF OUR
              QUALITY MANAGEMENT SYSTEM&quot;
            </p>

            <p className="text-gray-700 text-sm mb-4">
              We consider it as our management liability to implement and
              maintain this Quality Policy. The Quality Policy includes our
              commitment for continual improvement, for meeting internal
              requirements and customer requirements, and provides a basis for
              the establishment and review of quality objectives. The Quality
              Policy is made known within the organization and understood and
              adhered to by all our team. During management reviews, the Quality
              Policy is reviewed for its continuing suitability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

QualityPolicyPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Quality Policy">{page}</InnerPageLayout>;
};
