import AdminCard from "@/components/AdminCard";
import SectionHeader from "@/components/SectionHeader";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function HSEPage() {
  // Dummy data for personnel and contact information
  const personnelData = [
    { id: 1, title: "Equipment Inspector", imageSrc: "/hse/1.jpg" },
    { id: 2, title: "Male Nurse", imageSrc: "/hse/2.jpg" },
    { id: 3, title: "Safety Manager", imageSrc: "/hse/3.jpg" },
    { id: 4, title: "Safety Supervisor", imageSrc: "/hse/4.jpg" },
    { id: 5, title: "Safety Officer", imageSrc: "/hse/5.jpg" },
    { id: 6, title: "Work Permit Receiver", imageSrc: "/hse/6.jpg" },
    { id: 7, title: "Flagman", imageSrc: "/hse/7.jpg" },
    { id: 8, title: "Entry Attendant", imageSrc: "/hse/8.jpg" },
    { id: 9, title: "Fire Watcher", imageSrc: "/hse/9.jpg" },
  ];

  return (
    <>
      <Head>
        <title>GBL - HSE</title>
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
          HSE Manpower resources list as follows:"
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
            <p className="text-gray-800 mt-2">📞 +966 549 086 882</p>
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

HSEPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="HSE">{page}</InnerPageLayout>;
};
