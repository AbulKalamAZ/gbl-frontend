import PrimaryButton from "../PrimaryButton";
import SectionHeader from "../SectionHeader";

const KeyFactSection = () => {
  const facts = [
    "Formerly known as Rehab Contracting Est",
    "Leader in the market since established in 2010s",
    "Head Quarters in Yanbu – Saudi Arabia",
    "7 Branches in KSA and Global presence in UAE &amp; Bahrain too",
    "Grown now to 12 well managed business units",
    "More than 1000 satisfied employees",
    "92 Satisfied Clients",
    "30 Projects",
  ];
  return (
    <section className="relative pb-32">
      <div className=" w-full h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-[400px] lg:h-full">
          <div className="w-full h-[400px] lg:h-full bg-keyfact-img bg-no-repeat bg-cover bg-center"></div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start py-5 lg:py-0 px-5 lg:pl-24">
          <SectionHeader content="Company Information" />

          <h2 className="h2 font-extrabold mb-8">Key Facts</h2>

          <ul className="list-disc list-inside text-lg mb-12">
            {facts.map((item, index) => {
              return (
                <li key={index} className="pb-2">
                  {item}
                </li>
              );
            })}
          </ul>

          <PrimaryButton content="Know More" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 left-[400px] w-[600px] h-[450px] bg-machine"></div>
    </section>
  );
};

export default KeyFactSection;
