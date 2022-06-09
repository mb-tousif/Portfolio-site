import React from "react";
import Background from "../../Assets/FeatureImages/bg.png";
import BGImg from "../../Assets/FeatureImages/bgd.png";
import {FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaYoutube,FaPinterest, FaDribbble } from "react-icons/fa";

const Home = () => {
  return (
    <div className="hero min-h-[80%] bg-base-200">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2" style={{ backgroundImage: `url(${BGImg})`, backgroundSize: 'cover'}}>
        <div>
          <h1 className="text-5xl mb-4 font-bold">
            I AM A <br />
            WEB DESIGNER
          </h1>
          <div className="SocialIcon flex justify-center mb-4">
            <FaGithub className="github ml-2 hover:scale-110 w-6 h-6" />
            <FaFacebook className="facebook ml-2 hover:scale-110 w-6 h-6" />
            <FaYoutube className="youtube ml-2 hover:scale-110 w-6 h-6" />
            <FaLinkedin className="linkedin ml-2 hover:scale-110 w-6 h-6" />
            <FaPinterest className="pinterest ml-2 hover:scale-110 w-6 h-6" />
            <FaTwitter className="twitter ml-2 hover:scale-110 w-6 h-6" />
            <FaDribbble className="dribbble ml-2 hover:scale-110 w-6 h-6" />
          </div>
          <button className="btn btn-wide text-xl font-semiBold">
            MY RESUME
          </button>
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

export default Home;
