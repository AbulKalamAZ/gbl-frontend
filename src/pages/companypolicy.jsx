import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function CompanyPolicyPage() {
  return (
    <>
      <Head>
        <title>GBL - Company Policy</title>
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
                src={"/company-policy-banner.jpg"}
                width={360}
                height={450}
                alt="compnay-policy-banner"
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
            <h2 className="text-4xl font-bold text-black uppercase mb-4">
              Company Policy
            </h2>
            <p className="text-gray-700 text-xl font-semibold leading-6 uppercase mb-4">
              &quot;TO RESPONSIBLY PROVIDE TIMELY, COST EFFECTIVE QUALITY
              MANPOWER SUPPORT SERVICES WHILE MAINTAINING OUR OPERATING
              VALUES&quot;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

CompanyPolicyPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Company Policy">{page}</InnerPageLayout>;
};
