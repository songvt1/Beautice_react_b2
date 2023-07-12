import FooterLogo from "../../assets/img/FooterLogo.png";
import Vector from "../../assets/img/Vector.png";

import FacebookFT from "../../assets/img/facebookbt.png";
import TwitterFT from "../../assets/img/twitterbt.png";
import InLinkFT from "../../assets/img/inlinkbt.png";
import YoutubeFT from "../../assets/img/youtobebt.png";
import InstagramFT from "../../assets/img/instagrambt.png";

function Footer() {
  return (
    <div className="footer-container flex  flex-col justify-between md:mt-[120px] md:h-[500px] lg:mt-0 lg:h-[530px]">
      <div className="footer mt-10 mb-10 md:mt-[100px]">
        <div className="flex justify-between mt-[61px]">
          <div className="detail">
            <div className="footer-logo hidden sm:block">
              <img src={FooterLogo} />
            </div>
            <div className="mt-8 ml-5 text-[16px] font-normal tracking-[1.6px] text-[#D7DBFF]">
              <strong>Beautice </strong>is a Beauty Clinic WordPress Theme.
            </div>
            <div className="ml-5 text-[14px] font-medium tracking-[1.4px] italic text-[#D7DBFF] ">
              Baker Steet 101, NY, United States.
            </div>
            <div className="flex gap-4 mt-5 ml-5 text-[14px] font-medium tracking-[1.4px] italic text-[#D7DBFF]">
              <div className="phone-number">+521 569 8966.</div>
              <div className="email">mail@company.com.</div>
            </div>
          </div>
          <div className="pages hidden md:block ">
            <div className="title text-whiteColor text-[18px] font-semibold tracking-[1.8px]">
              Pages
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Home
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> About
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Services
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Gallery
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Team
            </div>
          </div>
          <div className="information hidden md:block">
            <div className="title  text-whiteColor text-[18px] font-semibold tracking-[1.8px]">
              Informations
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Terms & conditions
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Privacy policy
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Blog
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Contact
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bottom-footer md:flex justify-between flex-wrap ">
        <div className="social-footer flex gap-10 h-[28px]">
          <img className="social" src={FacebookFT} />
          <img className="social" src={TwitterFT} />
          <img className="social" src={InLinkFT} />
          <img className="social" src={YoutubeFT} />
          <img className="social" src={InstagramFT} />
        </div>
        <div className="text-right text-[16px] font-normal tracking-[1.6px] text-[#D7DBFF] ">
          © AltDesain Studio 2021 - All right reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
