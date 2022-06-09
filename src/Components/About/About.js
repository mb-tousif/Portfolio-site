import React from 'react';
import avatar from "../../Assets/FeatureImages/profile.png";

const About = () => {
    return (
      <div className="bg-accent p-4">
        <div class="max-w-xs mx-auto rounded-lg shadow-lg">
          <img class="object-cover fluid mx-auto h-60" src={avatar} alt="avatar" />
          <div class="py-5 text-center">
            <span class="block text-2xl font-bold">
              AZIZUL HAQUE TOUSIF
            </span>
            <span class="text-xl">
              Full Stack Web Developer
            </span>
          </div>
        </div>
      </div>
    );
};

export default About;