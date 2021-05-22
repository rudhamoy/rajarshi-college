import React from "react";
import TopBar from "../components/header/TopBar";
import MainHero from "../components/hero/MainHero";
import MainMenu from "../components/menu/MainMenu";
import MainAnnounce from "../components/announcement/MainAnnounce";
import Information from "../components/section/Information";
import FooterMain from "../components/footer/FooterMain";

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
