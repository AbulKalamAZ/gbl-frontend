import AdminCard from "@/components/AdminCard";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SectionHeader from "@/components/SectionHeader";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function AdministrationPage() {
  const personnelData = [
    { id: 1, title: "Government Relation Officer", imageSrc: "/admin/1.jpg" },
    { id: 2, title: "Public Relations Officer", imageSrc: "/admin/2.jpg" },
    { id: 3, title: "Admin Assistant", imageSrc: "/admin/3.jpg" },
    { id: 4, title: "Admin Secretary", imageSrc: "/admin/4.jpg" },
    { id: 5, title: "Office Assistant", imageSrc: "/admin/5.jpg" },
    { id: 6, title: "Accountant", imageSrc: "/admin/6.jpg" },
    { id: 7, title: "Accounts Assistant", imageSrc: "/admin/7.jpg" },
    { id: 8, title: "Document Controller", imageSrc: "/admin/8.jpg" },
    { id: 9, title: "Document Control Assistant", imageSrc: "/admin/9.jpg" },
    { id: 10, title: "Document Clerk", imageSrc: "/admin/10.jpg" },
    { id: 11, title: "Heavy Driver", imageSrc: "/admin/11.jpg" },
    { id: 12, title: "Light Driver", imageSrc: "/admin/12.jpg" },
    { id: 13, title: "Plumber", imageSrc: "/admin/13.jpg" },
    { id: 14, title: "Office Boy", imageSrc: "/admin/14.jpg" },
    { id: 15, title: "Tea Boy", imageSrc: "/admin/15.jpg" },
    { id: 16, title: "Cleaner", imageSrc: "/admin/16.jpg" },
    { id: 17, title: "General Helper", imageSrc: "/admin/17.jpg" },
    { id: 18, title: "General Labor", imageSrc: "/admin/18.jpg" },
  ];

  return (
    <>
      <Head>
        <title>GBL - Administration</title>
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
          Admin resources list as follows:"
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

AdministrationPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Administration">{page}</InnerPageLayout>;
};
