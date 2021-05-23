import React from "react";
import MainHero from "../components/hero/MainHero";
import MainAnnounce from "../components/announcement/MainAnnounce";
import Information from "../components/section/Information";

const Home = () => {
  return (
    <div>
      <MainHero />
      <MainAnnounce />
      <Information />
    </div>
  );
};

export default Home;
