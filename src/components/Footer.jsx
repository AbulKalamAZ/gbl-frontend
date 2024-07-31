import Image from "next/image";
import FacebookIcon from "../../public/icons/facebook.png";
import InstagramIcon from "../../public/icons/instagram.png";
import LinkedinIcon from "../../public/icons/linkedin.png";
import WhatsappIcon from "../../public/icons/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap pb-12">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 mb-6 md:mb-0 pt-12">
          {/* Logo and Text */}
          <div className="pr-24">
            {/* <img src="path/to/logo.png" alt="Logo" className="h-12 mb-4" /> */}
            <div className="logo max-w-[250px] min-w-[250px] h-[120px] bg-gray-600 mb-6"></div>
            <p>
              First Floor, Al Hazza Commercial Centre, Near Gold Souk Signal,
              King Abdul Aziz Street, PB# 6854/3955. Yanbu Al Bahar – 46424
              Madeena Region, Kingdom of Saudi Arabia
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full bg-white-dark flex justify-center items-center">
                <Image
                  src={FacebookIcon}
                  alt="facebook icon"
                  className="w-4 h-4"
                />
              </div>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full bg-white-dark flex justify-center items-center">
                <Image
                  src={InstagramIcon}
                  alt="instagram icon"
                  className="w-4 h-4"
                />
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full bg-white-dark flex justify-center items-center">
                <Image
                  src={WhatsappIcon}
                  alt="whatsapp icon"
                  className="w-4 h-4"
                />
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full bg-white-dark flex justify-center items-center">
                <Image
                  src={LinkedinIcon}
                  alt="linkedin icon"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          {/* Site Links Column 1 */}
          <div className="w-1/3 md:w-auto mb-4 md:mb-0 pt-12">
            <h5 className="h5 font-semibold mb-3 pb-3 border-primary border-b-2">
              Main Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="whoweare.html">Who We Are</a>
              </li>
              <li>
                <a href="clientele.html">Clientele</a>
              </li>
              <li>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <a href="gbl.html">GBL Profile</a>
              </li>
              <li>
                <a href="reachus.html">Reach Us</a>
              </li>
            </ul>
          </div>

          {/* Site Links Column 2 */}
          <div className="w-1/3 md:w-auto mb-4 md:mb-0 pt-12">
            <h5 className="h5 font-semibold mb-3 pb-3 border-primary border-b-2">
              Company Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="manpower.html">Manpower</a>
              </li>
              <li>
                <a href="otherbusinessunits.html">Other Business Units</a>
              </li>

              <li>
                <a href="certificates.html">Certificates</a>
              </li>
              <li>
                <a href="keyfacts.html">Key Facts</a>
              </li>
              <li>
                <a href="whoiswho.html">Who is Who</a>
              </li>
            </ul>
          </div>

          {/* Site Links Column 3 */}
          <div className="w-1/3 md:w-auto pt-12">
            <h5 className="h5 font-semibold mb-3 pb-3 border-primary border-b-2">
              More Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="sisterconcerns.html">Sister Concerns</a>
              </li>
              <li>
                <a href="vision.html">Vision</a>
              </li>
              <li>
                <a href="mission.html">Mission</a>
              </li>
              <li>
                <a href="companypolicy.html">Company Policy</a>
              </li>
              <li>
                <a href="qualitypolicy.html">Quality Policy</a>
              </li>
              <li>
                <a href="hsepolicy.html">HSE Policy</a>
              </li>
              <li>
                <a href="organizationchart.html">Organization Chart</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-primary py-4">
        <span className="block text-center">
          © {new Date().getFullYear()} GBL Group. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
