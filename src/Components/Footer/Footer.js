import React from "react";
import tousif from "../../Assets/FeatureImages/myName-3.png";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-secondary text-primary-focus">
      <div data-aos="flip-up">
        <img
          src={tousif}
          width="160"
          height="40"
          viewBox="0 0 24 24"
          alt="Logo"
        />
        <p className="font-bold">Full Stack Web Developer</p>
        <p>Copyright &#169; {new Date().getFullYear()} - All right reserved.</p>
      </div>
      <div>
        <div className="grid grid-flow-col md:gap-4">
          <span>
            <a href="https://www.facebook.com/azizul.tousif">
              <BsFacebook className="w-8 h-6" />
            </a>
          </span>
          <span>
            <a href="https://www.youtube.com/c/JhankarMahbub">
              <FaYoutube className="w-8 h-6" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/azizul-haque-tousif/">
              <GrLinkedinOption className="w-8 h-6" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
