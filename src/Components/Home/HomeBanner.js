import React from 'react';
import Background from "../../Assets/FeatureImages/bg.png";
import BGImg from "../../Assets/FeatureImages/bgd.png";
import {FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaPinterest } from "react-icons/fa";
// import Writing from './Writing';

const HomeBanner = () => {
    return (
      <div className="hero min-h-[80%] bg-base-200">
        <div
          className="hero-content grid grid-cols-1 md:grid-cols-2"
          style={{ backgroundImage: `url(${BGImg})`, backgroundSize: "cover" }}
        >
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">
              <span className="md:text-4xl">I AM A</span>
              <br />
              <span className="text-primary">FULL STACK</span> WEB DEVELOPER
            </h1>
            {/* <Writing /> */}
            <div className="SocialIcon flex justify-center mt-2 mb-4">
              <a
                href="https://github.com/mb-tousif"
                rel="noReferrer"
                target="_blank"
              >
                <FaGithub className="github ml-2 hover:scale-110 w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/azizul-haque-tousif/"
                rel="noReferrer"
                target="_blank"
              >
                <FaLinkedin className="linkedin ml-2 hover:scale-110 w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/azizul.tousif"
                rel="noReferrer"
                target="_blank"
              >
                <FaFacebook className="facebook ml-2 hover:scale-110 w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/my_dreams1990"
                rel="noReferrer"
                target="_blank"
              >
                <FaTwitter className="twitter ml-2 hover:scale-110 w-6 h-6" />
              </a>
              <a href="https://pin.it/6BfrBxi" rel="noReferrer" target="_blank">
                <FaPinterest className="pinterest ml-2 hover:scale-110 w-6 h-6" />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/13f-zu_15ejSEsu69AMaVQ48U69zYc0J0/view"
              rel="noReferrer"
              target="_blank"
              className="btn btn-wide text-xl font-semiBold"
            >
              MY RESUME
            </a>
          </div>
          <img
            src={Background}
            className="image-fluid mx-auto my-auto"
            alt="bg-img"
          />
        </div>
      </div>
    );
};

export default HomeBanner;