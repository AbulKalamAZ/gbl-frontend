import ElectricalBG from "../../../public/manpower/electrical.jpg";
import HSEBG from "../../../public/manpower/hse.jpg";
import InstrumentBG from "../../../public/manpower/instrument.jpg";
import WarehousingBG from "../../../public/manpower/warehousing.jpg";
import SectionHeader from "../SectionHeader";
import ServiceCard from "../ServiceCard";

const SupportSection = () => {
  return (
    <section className="py-10">
      <SectionHeader content="SERVICE ON THE REACH" />
      <h2 className="h2 font-extrabold mb-12">Manpower Support Services</h2>

      <div className="card-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <ServiceCard bg={ElectricalBG} content="Electrical" />
          </div>
          <div className="col-span-3">
            <ServiceCard bg={InstrumentBG} content="Instrumentation" />
          </div>
          <div className="col-span-3">
            <ServiceCard bg={HSEBG} content="HSE" />
          </div>
          <div className="col-span-3">
            <ServiceCard bg={WarehousingBG} content="WareHousing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
