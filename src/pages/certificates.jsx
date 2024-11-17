import InnerPageLayout from "@/layouts/InnerPageLayout";
import Head from "next/head";

export default function CertificatesPage() {
  const leftColumnData = [
    { label: "Commercial Registration", value: "4700012410" },
    { label: "GOSI Certificate", value: "556128006" },
    { label: "Saudization Certificate", value: "20002106000004" },
    { label: "Zakat Certificate", value: "2380796929" },
    { label: "VAT Registration Certificate", value: "310385974700003" },
    { label: "Chamber of Commerce", value: "20500114289" },
    { label: "ARAMCO Vendor Code", value: "100535333" },
    { label: "Sabic Vendor Code", value: "VDR73637391" },
    { label: "ISO 9001:2015", value: "ACSGP-ARATCO-QSM-5064" },
    { label: "ISO 14001:2015", value: "AMER13358" },
    { label: "ISO 45001:2018", value: "AMER13358" },
  ];
  return (
    <>
      <Head>
        <title>GBL - Certificates</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>

      <div className="flex flex-col md:flex-row md:items-start md:space-x-32 p-6 ">
        {/* Left Column */}
        <div className="flex-1 pt-4 border-t-2 border-primary">
          <ul className="space-y-4 text-sm md:text-base text-gray-700">
            {leftColumnData.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong>{" "}
                <span className="text-primary font-medium">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex-1 pt-4 border-t-2 border-primary">
          <div className="space-y-2 text-sm md:text-base text-gray-700">
            <p>
              <strong>Bank Reference:</strong>
            </p>
            <p>
              <span className="font-semibold">Beneficiary Name</span> -{" "}
              <span className="text-primary font-medium">
                Al Rehab Advanced Trading & Contracting Company
              </span>
            </p>
            <p>
              <span className="font-semibold">Bank Name</span> -{" "}
              <span className="text-primary font-medium">
                National Commercial Bank
              </span>
            </p>
            <p>
              <span className="font-semibold">Branch</span> -{" "}
              <span className="text-primary font-medium">
                Yanbu Main Branch
              </span>
            </p>
            <p>
              <span className="font-semibold">A/C No</span> -{" "}
              <span className="font-mono text-primary font-medium">
                3517 2616 000 100
              </span>
            </p>
            <p>
              <span className="font-semibold">IBAN</span> -{" "}
              <span className="font-mono text-primary font-medium">
                SA10 1000 0035 1726 1600 0100
              </span>
            </p>
            <p>
              <span className="font-semibold">SWIFT CODE</span> -{" "}
              <span className="font-mono text-primary font-medium">
                NCBKSAJE
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

CertificatesPage.getLayout = function getLayout(page) {
  return <InnerPageLayout title="Certificates">{page}</InnerPageLayout>;
};
