import FurnishedImage from "../../../public/manpower/business-apartment.jpg";
import CateringImage from "../../../public/manpower/business-catering.jpg";
import EquipmentImage from "../../../public/manpower/business-equipment.jpg";
import ManpowerImage from "../../../public/manpower/business-manpower.jpg";
import RestaurantImage from "../../../public/manpower/business-restaurant.jpg";
import SupermarketImage from "../../../public/manpower/business-supermarket.jpg";
import TransportImage from "../../../public/manpower/business-transport.jpg";
import VehicleImage from "../../../public/manpower/business-vehicle.jpg";
import BusinessCard from "../BusinessCard";

const OtherBusiness = () => {
  return (
    <section className="py-10">
      <h2 className="h2 font-extrabold text-center mb-12">
        Other Business Units
      </h2>

      <div className="business-cards flex justify-evenly items-center gap-4 mb-4">
        <BusinessCard bg={ManpowerImage} content="Manpower" />
        <BusinessCard bg={CateringImage} content="Camp & Catering" />
        <BusinessCard bg={EquipmentImage} content="Equipments" />
        <BusinessCard bg={VehicleImage} content="Vehicle Hiring" />
      </div>
      <div className="business-cards flex justify-evenly items-center gap-4">
        <BusinessCard bg={FurnishedImage} content="Furnished Apartments" />
        <BusinessCard bg={TransportImage} content="Transportation Service" />
        <BusinessCard
          bg={SupermarketImage}
          content="Supermarkets & Groceries"
        />
        <BusinessCard
          bg={RestaurantImage}
          content="Restaurants & Coffee shops"
        />
      </div>
    </section>
  );
};

export default OtherBusiness;
