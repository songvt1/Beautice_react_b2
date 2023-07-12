import "./App.css";
import Header from "./components/Header";
import MainService from "./components/MainService";
import Slide from "./components/Slide";

import AboutUs from "./components/AboutUs";
import Professional from "./components/Professional";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

import { useEffect, useState } from "react";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-contain xl:bg-auto  bg-[url('./assets/img/SlideBackground.png')] bg-no-repeat max-w-[1440px] mx-auto h-full">
      <div className="mx-[20px] sm:mx-[40px] xl:mx-[150px] pt-10">
        <Header />
        <Slide />
        <MainService />
      </div>
      <div className="bg-contain xl:bg-auto bg-right-top bg-[url('./assets/img/BackgroundBubble.png')] bg-no-repeat max-w-[1440px] mx-auto h-full mt-[-220px] pt-[220px]">
        <div className="mx-[20px] sm:mx-[40px] xl:mx-[150px] ">
          <AboutUs />
        </div>
        <Professional />
      </div>
      <div className="bg-contain xl:bg-auto bg-left-top bg-[url('./assets/img/BackgroundContact.png')] bg-no-repeat max-w-[1440px] mx-auto mt-[-66px]">
        <div className="mx-[20px] sm:mx-[40px] xl:mx-[150px] pt-10 ">
          <Contact />
        </div>
      </div>
      <div className="mt-[68px] bg-contain bg-[url('./assets/img/FooterBG.png'),url('./assets/img/BottomBG.png')] bg-left-bottom  bg-no-repeat max-w-[1440px] mx-auto pt-[80px] h-auto md:h-[706px]">
        <div className="mx-[20px] sm:mx-[40px] xl:mx-[150px]">
          <Footer />
        </div>
      </div>
      {showGoToTop && <GoToTop />}
    </div>
  );
}

export default App;
