import AdminCard from "@/components/AdminCard";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SectionHeader from "@/components/SectionHeader";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function CivilPage() {
  // Dummy data for personnel and contact information
  const personnelData = [
    { id: 1, title: "Civil QA/QC Inspectors", imageSrc: "/civil/1.jpg" },
    { id: 2, title: "Civil Engineers", imageSrc: "/civil/2.jpg" },
    { id: 3, title: "Civil Supervisors", imageSrc: "/civil/3.jpg" },
    { id: 4, title: "Draughtsman", imageSrc: "/civil/4.jpg" },
    { id: 5, title: "Civil Foreman", imageSrc: "/civil/5.jpg" },
    {
      id: 6,
      title: "Surveyor with Survey Equipment",
      imageSrc: "/civil/6.jpg",
    },
    { id: 7, title: "Backhoe Operator", imageSrc: "/civil/7.jpg" },
    { id: 8, title: "Excavator Operator", imageSrc: "/civil/8.jpg" },
    { id: 9, title: "Bobcat Operator", imageSrc: "/civil/9.jpg" },
    { id: 10, title: "Steel Fixers", imageSrc: "/civil/10.jpg" },
    { id: 11, title: "Carpenter", imageSrc: "/civil/11.jpg" },
    { id: 12, title: "Masons", imageSrc: "/civil/12.jpg" },
    { id: 13, title: "Painter", imageSrc: "/civil/13.jpg" },
    { id: 14, title: "Civil Helper", imageSrc: "/civil/14.jpg" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Civil</title>
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
          Civil Manpower resources list as follows:"
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

CivilPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Civil">{page}</InnerPageLayout>;
};
