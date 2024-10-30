import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdministrationPage({ children }) {
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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/banners/1.jpg)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#1c1f33b9] flex justify-start items-end p-16">
          <h1 className="text-5xl font-bold">Page Title</h1>
        </div>
      </div>

      <div className="container mx-auto pt-16 pb-10">{children}</div>

      <Footer />
    </div>
  );
}
