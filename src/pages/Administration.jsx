import React from "react";
import InnerPageLayout from "@/layouts/InnerPageLayout";

export default function AdministrationPage() {
  // Dummy data for personnel and contact information
  const personnelData = [
    { id: 1, title: "Government Relation Officer" },
    { id: 2, title: "Public Relations Officer" },
    { id: 3, title: "Admin Assistant" },
    { id: 4, title: "Admin Secretary" },
    { id: 5, title: "Office Assistant" },
    { id: 6, title: "Accountant" },
    { id: 7, title: "Accounts Assistant" },
    { id: 8, title: "Document Controller" },
    { id: 9, title: "Document Control Assistant" },
    { id: 10, title: "Document Clerk" },
    { id: 11, title: "Heavy Driver" },
    { id: 12, title: "Light Driver" },
    { id: 13, title: "Plumber" },
    { id: 14, title: "Office Boy" },
    { id: 15, title: "Tea Boy" },
    { id: 16, title: "Cleaner" },
    { id: 17, title: "General Helper" },
    { id: 18, title: "General Labor" },
  ];

  return (
    <div className="container mx-auto pt-16 pb-10">
      {/* Description */}
      <div className="">
        <p className="text-center text-sm text-gray-700">
          ARATCO is an ARAMCO vendor code registration holding Company, which
          has more than 500 employees under direct sponsorships. Please see the
          Admin resources list as follows:
        </p>
      </div>

      {/* Personnel Grid */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        {personnelData.map((person) => (
          <div
            key={person.id}
            className="relative h-48 bg-gray-300 rounded-md flex items-end p-4"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
            <h3 className="relative text-white text-lg font-semibold">
              {person.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="container mx-auto my-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h4 className="text-lg font-bold">Abdul Samad Cheriyam Parambil</h4>
          <p className="text-blue-600">Administration and Marketing Manager</p>
          <p className="text-gray-600 mt-2">📞 +966 549 086 882</p>
          <p className="text-gray-600">
            ✉️{" "}
            <a
              href="mailto:cpassamad@rehabgroupksa.com"
              className="text-blue-600"
            >
              cpassamad@rehabgroupksa.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

AdministrationPage.getLayout = function getLayout(page) {
  return <InnerPageLayout>{page}</InnerPageLayout>;
};
