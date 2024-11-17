import PrimaryButton from "@/components/PrimaryButton";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function ReachUsPage() {
  return (
    <>
      <Head>
        <title>GBL - Reach Us</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <section className="py-10 mb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex justify-center items-start">
            <div className="relative">
              <Image
                src={"/contact-intro.jpg"}
                alt="contact intro"
                width={450}
                height={650}
              />

              <div className="absolute w-5/6 bottom-10 left-0 bg-primary text-white p-4 ">
                <h3 className="text-lg font-semibold">
                  We will get back to you within 24 hours, or call us at
                </h3>
                <p className="text-xl mt-2 font-bold">+966 549 086 882</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Feel free to contact us to solve any problem!
      </h2>
      <form className="space-y-6 ">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-6/12 p-3 mr-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-5/12 p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-md"
          rows="5"
        ></textarea>

        <PrimaryButton content="Submit Now" />
      </form>
    </div>
  );
};

ReachUsPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Reach Us">{page}</InnerPageLayout>;
};
