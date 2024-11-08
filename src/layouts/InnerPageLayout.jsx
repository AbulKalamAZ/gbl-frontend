import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function InnerPageLayout({ title, children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center w-full h-[320px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/banners/1.jpg)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-start items-end p-16">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-16 pb-10">{children}</div>

      <Footer />
    </div>
  );
}
