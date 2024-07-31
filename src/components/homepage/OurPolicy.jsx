import AntiVirusIcon from "../../../public/icons/antivirus.png";
import ChartIcon from "../../../public/icons/chart.png";
import DealIcon from "../../../public/icons/deal.png";
import LightBulbIcon from "../../../public/icons/lightbulb.png";
import TrophyIcon from "../../../public/icons/trophy.png";
import PolicyCard from "../PolicyCard";
import SectionHeader from "../SectionHeader";

const OurPolicy = () => {
  const policy_data = [
    {
      id: 0,
      icon: TrophyIcon,
      title: "Mission",
      text: "To be the prominent provider of qualified support services by consistently improving the quality of our services, to add value for clients through ...",
    },
    {
      id: 0,
      icon: ChartIcon,
      title: "Vision",
      text: "Empowering Clients by providing innovative quality solutions incorporating international best practice. To perform work for our valued clients and target projects, ...",
    },
    {
      id: 0,
      icon: AntiVirusIcon,
      title: "Company Policy",
      text: "To responsibly provide timely, cost effective quality manpower support services ...",
    },
    {
      id: 0,
      icon: LightBulbIcon,
      title: "Quality Policy",
      text: "To maintain and continually improve the effectiveness of our quality management system",
    },
    {
      id: 0,
      icon: DealIcon,
      title: "HSE Policy",
      text: "In conducting its activities of providing Manpower Support Services at the highest level of quality",
    },
  ];
  return (
    <section className="py-10">
      <div className="section-header-wrapper flex flex-col justify-center items-center">
        <SectionHeader content="Our Policy" />
        <h2 className="h2 font-extrabold text-center mb-12 max-w-[650px]">
          Commitment to Provide You Quality Service Always
        </h2>
      </div>
      <div className="business-cards flex justify-evenly items-center gap-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {policy_data.map(({ id, title, text, icon }) => (
            <PolicyCard key={id} title={title} text={text} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
