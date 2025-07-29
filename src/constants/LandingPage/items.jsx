import {
  CoverageAreaIcon,
  ServicesIcon,
  TripsIcon,
  TypesVehiclesIcon,
} from "../../assets/icons/icons";

export const AboutItemsConst = [
  {
    value: "500+",
    name: "Satisfied Clients",
  },
  {
    value: "50+",
    name: "Professional Drivers",
  },
];

export const ServicesItemsConst = [
  {
    icon: <CoverageAreaIcon className="w-7 h-7 " />,
    name: "Coverage Area",
    description:
      "We cover the entire Miami metropolitan area and surrounding counties, ensuring punctual and efficient service.",
    link: "/coverage",
  },
  {
    icon: <ServicesIcon className="w-7 h-7 " />,
    name: "Principal Levels of Services",
    description:
      "From basic transportation to specialized medical care during the journey, we adapt our services to your needs.",
    link: "/services",
  },
  {
    icon: <TypesVehiclesIcon className="w-7 h-7 " />,
    name: "Types of Transport Vehicles",
    description:
      "We have a varied fleet that includes cars, adapted vans, and ambulances for all types of needs.",
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

export const Opinions = [
  {
    name: "Sarah Johnson",
    testimonial:
      "Herd Transportation has been a game-changer for our company's logistics. Their reliable service and professional drivers ensure our deliveries are always on time.",
    rating: "5",
  },
  {
    name: "Michael Chen",
    testimonial:
      "I've been using Herd Transportation for my restaurant supplies for over a year now. Their temperature-controlled vehicles and careful handling keep our products in perfect condition.",
    rating: "5",
  },
  {
    name: "Emily Rodriguez",
    testimonial:
      "The team at Herd Transportation is incredibly responsive and flexible. They've helped us manage complex event logistics with ease and professionalism.",
    rating: "4",
  },
];
