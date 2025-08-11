import { Ambulancia, Ban, Bus, Car } from "../../assets/icons/icons";

export const VehiclesConst = [
  {
    icon: <Car className="w-8 h-8 text-white" />,
    img: "./img/Vehicles/Car.avif",
    name: "Regular Cars",
    description:
      "Our regular cars offer comfortable and convenient transportation for people who do not require special medical assistance. Ideal for routine medical appointments, shopping or social activities.",
    carct: [
      "Capacity: 3-4 passengers",
      "Basic accessibility",
      "Ideal for short distances",
      "Full climate control",
    ],
    imagePrompt:
      "Professional modern sedan car in white color, clean and well-maintained, photographed from a 3/4 front angle in daylight against a neutral background, showing comfortable interior through windows",
  },
  {
    icon: <Ban className="w-8 h-8 text-white" />,
    img: "./img/Vehicles/Ban.avif",
    name: "Medical Vans",
    description:
      "Vehicles specially adapted for people with reduced mobility or who use wheelchairs. Equipped with ramps or lifts and secure restraint systems.",
    carct: [
      "Capacity: 5-6 passengers",
      "Ramp/lift included",
      "Basic medical equipment",
      "Trained personnel",
    ],
    imagePrompt:
      "Medical transport van in white with blue medical stripe, wheelchair ramp extended, side door open showing wheelchair lift mechanism, photographed from side angle in bright lighting, clean professional appearance",
  },
  {
    icon: <Ambulancia className="w-8 h-8 text-white" />,
    img: "./img/Vehicles/Ambulance.avif",
    name: "Stretcher Transport",
    description:
      "Non-emergency medical transport for patients impared, requiring medical transfer from the bed to the stretcher . Equipped with stretchers and an extra driver.",
    carct: [
      "Stretcher transport",
      "Vital signs monitoring",
      "Medical staff on board",
      "Ideal for hospital discharges",
    ],
    imagePrompt:
      "Non-emergency medical transport ambulance in white and blue colors, less urgent appearance than emergency ambulances, side doors open showing stretcher and basic medical equipment, clean and professional look, photographed in daylight",
  },
  {
    icon: <Bus className="w-8 h-8 text-white" />,
    img: "./img/Vehicles/Bus.avif",
    name: "Transport Buses",
    description:
      "Perfect for large groups or collective transfers. Ideal for senior center excursions, event transfers or regular services for residential communities.",
    carct: [
      "Capacity: 15-25 passengers",
      "Wheelchair spaces",
      "Ideal for groups and events",
      "Ample luggage space",
    ],
    imagePrompt:
      "Modern passenger transport bus with wheelchair accessibility, clean white exterior with blue accents, large windows, photographed from 3/4 front angle showing spacious entrance with wheelchair lift, professional transportation appearance",
  },
];
