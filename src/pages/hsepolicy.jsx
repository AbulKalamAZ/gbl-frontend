import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function HSEPolicyPage() {
  return (
    <>
      <Head>
        <title>GBL - HSE Policy</title>
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
                src={"/hse-policy-banner.jpg"}
                width={360}
                height={450}
                alt="compnay-policy-banner"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-12 -right-8 bg-white shadow-lg rounded-lg pl-4 pr-8">
                <p className="relative text-[84px] font-bold text-black">
                  1000<span className="text-2xl absolute top-4">+</span>
                </p>
                <p className="text-sm relative left-10 bottom-5 text-gray-700 font-medium">
                  Satisfied Employees
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold text-black uppercase mb-4">
              HEALTH, SAFETY & ENVIRONMENTAL POLICY
            </h2>

            <p className="text-gray-700 text-sm mb-4">
              In conducting its activities of providing Manpower Support
              Services at the highest level of quality, we consider the issue of
              exceptional protection, occupational health and safety of our
              employees and continuous improvement of the working environment as
              one of our main targets. And also in respect to protection of
              natural environment, we confirm that we realize the principles
              which are to be taken for such protection. We commit ourselves to
              provide and maintain our Health, safety and environmental
              policies.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              To provide the necessary training and education programs for
              bringing all our staff, suppliers and subcontractors to the
              required level of environmental consciousness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

HSEPolicyPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="HSE Policy">{page}</InnerPageLayout>;
};
