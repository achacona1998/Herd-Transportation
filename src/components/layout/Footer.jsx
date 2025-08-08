import { Link } from "react-router-dom";
import { Card } from "../Footer/Card";
import {
  ContactUsConst,
  OurServicesConst,
  QuickLinksConst,
  SocialMedia,
} from "../../constants/Footer/items";
import { Info } from "../Footer/Info";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] text-white">
      <div className="px-4 sm:px-6 md:px-8 pt-7 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <Info
            title="Herd Transportation"
            slogan="Providing safe and reliable transportation services for seniors with
            care and compassion"
            items={SocialMedia}
          />

          {/* Quick Links */}
          <Card items={QuickLinksConst} title="Quick Links" />

          {/* Our Services */}
          <Card items={OurServicesConst} title="Our Services" />

          {/* Contact Us */}
          <Card items={ContactUsConst} title="Contact Us" />
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-[#CFB53B] mt-5 pt-2 text-center">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Herd Transportation. All rights
            reserved.
          </p>
          <p className="text-sm sm:text-base">
            Designed and implemented by:{" "}
            <Link
              to="https://sierraesperanzac.com/"
              className="font-bold hover:text-[#CFB53B] transition-colors duration-300"
              target="_blank">
              Sierra-Esperanza Creations
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
