import AdminCard from "@/components/AdminCard";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SectionHeader from "@/components/SectionHeader";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function InstrumentationPage() {
  // Dummy data for personnel and contact information
  const personnelData = [
    {
      id: 1,
      title: "Instrumentation QA/QC Inspector",
      imageSrc: "/instrumentation/1.jpg",
    },
    {
      id: 2,
      title: "Instrumentation Engineer",
      imageSrc: "/instrumentation/2.jpg",
    },
    {
      id: 3,
      title: "Instrumentation Supervisor",
      imageSrc: "/instrumentation/3.jpg",
    },
    {
      id: 4,
      title: "Instrumentation Foreman",
      imageSrc: "/instrumentation/4.jpg",
    },
    {
      id: 5,
      title: "Instrument Technician",
      imageSrc: "/instrumentation/5.jpg",
    },
    { id: 6, title: "Instrument Fitters", imageSrc: "/instrumentation/6.jpg" },
    { id: 7, title: "Instrument Helper", imageSrc: "/instrumentation/7.jpg" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Instrumentation</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="container mx-auto pb-10">
        {/* Description */}
        <SectionHeader
          content="GBL is an GBL vendor code registration holding Company, which
          has more than 500 employees under direct sponsorships. Please see the
          Instrumentation Manpower resources list as follows:"
        />

        {/* Personnel Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
          {personnelData.map((person) => (
            <AdminCard
              key={person.id}
              title={person.title}
              imageSrc={person.imageSrc}
            />
          ))}
        </div>

        {/* Contact Info */}
        <div className="mx-auto px-0 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="text-lg font-bold">Abdul Samad Cheriyam Parambil</h4>
            <p className="text-primary">Administration and Marketing Manager</p>
            <p className="text-gray-800 flex justify-center items-center gap-1 mt-2">
              <PhoneIcon width={20} />
              <span>+966 549 086 882</span>
            </p>
            <p className="text-gray-800">
              ✉️{" "}
              <a
                href="mailto:cpassamad@rehabgroupksa.com"
                className="text-gray-800"
              >
                cpassamad@rehabgroupksa.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

InstrumentationPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Instrumentation">{page}</InnerPageLayout>;
};
