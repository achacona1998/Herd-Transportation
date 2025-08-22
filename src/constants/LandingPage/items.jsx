import {
  CoverageAreaIcon,
  ServicesIcon,
  TripsIcon,
  TypesVehiclesIcon,
} from "../../assets/icons/icons";

export const AboutItemsConst = [
  {
    value: "10+",
    name: "Years of Service",
  },
  {
    value: "100+",
    name: "Professional Drivers",
  },
];

export const ServicesItemsConst = [
  {
    icon: <CoverageAreaIcon className="w-7 h-7 " />,
    name: "Coverage Area",
    description:
      "We cover the entire Florida's South West area and surrounding counties, ensuring punctual and efficient service.",
    link: "/coverage",
  },
  {
    icon: <ServicesIcon className="w-7 h-7 " />,
    name: "Principal Levels of Services",
    description:
      "From basic ambulatory transportation to specialized Stretcher Transportation during the journey, we adapt our services to your needs.",
    link: "/services",
  },
  {
    icon: <TypesVehiclesIcon className="w-7 h-7 " />,
    name: "Types of Transport Vehicles",
    description:
      "We have a varied fleet that includes cars, adapted vans, and minivans for all types of needs.",
    link: "/vehicles",
  },
  {
    icon: <TripsIcon className="w-7 h-7 " />,
    name: "Different Types of Trips",
    description:
      "We offer one-way trips, round trips, multiple stops, and scheduled regular services according to your requirements.",
    link: "/trips",
  },
];
