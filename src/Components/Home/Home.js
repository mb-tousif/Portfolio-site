import React from "react";
import ContactForm from "./ContactForm";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <div className="bg-accent">
      <HomeBanner />
      <ContactForm />
    </div>
  );
};

export default Home;
