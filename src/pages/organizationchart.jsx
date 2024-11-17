import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";
import Image from "next/image";

export default function OrganizationChartPage() {
  return (
    <>
      <Head>
        <title>GBL - Organization Chart</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <section className="bg-gray-100 py-10">
        <div className="w-full relative flex justify-center items-center">
          <Image
            className="w-full "
            src={"/organizationchart.png"}
            width={800}
            height={400}
            alt="vision banner"
          />
        </div>
      </section>
    </>
  );
}

OrganizationChartPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Organization Chart">{page}</InnerPageLayout>;
};
