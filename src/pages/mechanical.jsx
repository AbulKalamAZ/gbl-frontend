import AdminCard from "@/components/AdminCard";
import SectionHeader from "@/components/SectionHeader";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function MechanicalPage() {
  // Dummy data for personnel and contact information
  const personnelData = [
    {
      id: 1,
      title: "Mechanical QA/QC Inspectors",
      imageSrc: "/mechanical/1.jpg",
    },

    { id: 2, title: "Mechanical Engineers", imageSrc: "/mechanical/2.jpg" },
    { id: 3, title: "Planner / Scheduler", imageSrc: "/mechanical/3.jpg" },
    { id: 4, title: "Mechanical Supervisor", imageSrc: "/mechanical/4.jpg" },
    { id: 5, title: "Mechanical Foreman", imageSrc: "/mechanical/5.jpg" },
    { id: 6, title: "Mechanical Technician", imageSrc: "/mechanical/6.jpg" },
    { id: 7, title: "Mechanical Fitter", imageSrc: "/mechanical/7.jpg" },
    { id: 8, title: "Millwright", imageSrc: "/mechanical/8.jpg" },
    { id: 9, title: "Erector", imageSrc: "/mechanical/9.jpg" },
    { id: 10, title: "Crane Operator", imageSrc: "/mechanical/10.jpg" },
    { id: 11, title: "Forklift Operator", imageSrc: "/mechanical/11.jpg" },
    { id: 12, title: "Man Lift Operator", imageSrc: "/mechanical/12.jpg" },
    {
      id: 13,
      title: "Piping QA/QC Inspectors",
      imageSrc: "/mechanical/13.jpg",
    },
    { id: 14, title: "Piping Engineers", imageSrc: "/mechanical/14.jpg" },
    { id: 15, title: "Piping Supervisor", imageSrc: "/mechanical/15.jpg" },
    { id: 16, title: "Piping Foreman", imageSrc: "/mechanical/16.jpg" },
    { id: 17, title: "Fabricator", imageSrc: "/mechanical/17.jpg" },
    { id: 18, title: "Pipe Fitters", imageSrc: "/mechanical/18.jpg" },
    {
      id: 19,
      title: "Multi Welder (CS/SS/Alloy)",
      imageSrc: "/mechanical/19.jpg",
    },
    { id: 20, title: "6G Welder", imageSrc: "/mechanical/20.jpg" },
    { id: 21, title: "3G/4G/6G Welder", imageSrc: "/mechanical/21.jpg" },
    { id: 22, title: "Rigger Foreman", imageSrc: "/mechanical/22.jpg" },
    { id: 23, title: "Rigger Level 1", imageSrc: "/mechanical/23.jpg" },
    { id: 24, title: "Rigger Level 2", imageSrc: "/mechanical/24.jpg" },
    { id: 25, title: "Rigger Level 3", imageSrc: "/mechanical/25.jpg" },
    { id: 26, title: "Sand Blasters", imageSrc: "/mechanical/26.jpg" },
    { id: 27, title: "Spray Painter", imageSrc: "/mechanical/27.jpg" },
    { id: 28, title: "Mechanical Helper", imageSrc: "/mechanical/28.jpg" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Mechanical</title>
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
          Mechanical Manpower resources list as follows:"
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

MechanicalPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Mechanical">{page}</InnerPageLayout>;
};
