import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Background from "../../Assets/FeatureImages/bg.png";
import BGImg from "../../Assets/FeatureImages/bgd.png";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className="hero min-h-[80%] bg-base-200">
      <div
        className="hero-content grid grid-cols-1 md:grid-cols-2"
        // style={{ backgroundImage: `url(${BGImg})`, backgroundSize: "cover" }}
      >
        <div>
          <h1 className="md:text-3xl text-xl font-bold">I AM 📜</h1>
          <h2 className="text-[#174b8a] md:text-3xl text-center text-xl mb-4 font-bold">
            <TypeWriterEffect
              cursorColor="#3a2376"
              multiText={[
                "AZIZUL HAQUE TOUSIF",
                "Web Designer",
                "MERN Stack Developer",
                "React Developer",
              ]}
              multiTextDelay={1500}
              typeSpeed={50}
              multiTextLoop
            />
          </h2>

          <div className="SocialIcon flex mt-2 mb-4">
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
            download
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
