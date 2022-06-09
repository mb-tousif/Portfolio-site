import React from "react";
import tousif from "../../Assets/FeatureImages/myName-3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-secondary text-primary-focus">
      <div data-aos="flip-up">
        <img
          src={tousif}
          width="140"
          height="40"
          viewBox="0 0 24 24"
          alt="Logo"
        />
        <p className="font-bold">Full Stack Web Developer</p>
        <p>Copyright &#169; {new Date().getFullYear()} - All right reserved.</p>
      </div>
    </footer>
  );
};
AOS.init();
export default Footer;
