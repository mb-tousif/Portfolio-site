import React from 'react';
import avatar from "../../Assets/FeatureImages/profile.png";

const About = () => {
    return (
        <div className='md:grid bg-accent md:grid-cols-2 p-2'>
        <div className="m-2 p-2 my-auto text-justify">
            <p className='text-xl font-bold text-center m-2'>Assalamualaikum! I am AZIZUL HAQUE TOUSIF.</p>
            <p className='m-2'>Becoming a MERN Stack Web Developer is my passion! That's why I Sign up with Jhanker Mahbub in <a className='text-violet-800 font-semibold' href="https://web.programming-hero.com/">Programming-hero</a> web-development course. Now Alhamdulillah I became a junior MERN stack web developer! </p>
            <p className='m-2'>As a junior full-stack web developer, I am confident, enthusiastic, quick learner and want to utilize my knowledge and technical skills to serve a professional organization for my personal and career growth with true dedication, hard work, and commitment.</p>
            <button className='btn btn-wide'>Hire Me</button>
        </div>
        <div class="max-w-xs mx-auto rounded-lg shadow-lg p-2">
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