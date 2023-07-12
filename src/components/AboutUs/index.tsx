import PlayBtn from "../../assets/img/Play_button.png";

function AboutUs() {
  return (
    <div className="about-us-container mt-[137px] flex justify-between flex-wrap">
      <div className="content mx-auto xl:mx-0">
        <p className="w-[90px] font-semibold text-[16px] leading-[125%] text-pinkColor  ">
          About Us
        </p>
        <div className="max-w-[664px] font-semibold text-[36px] leading-[125%] text-blueColor mt-[10px] mb-[22px]">
          We are the best beauty clinic
        </div>
        <div className="max-w-[483px] font-normal text-[16px] tracking-[1.6px] text-grayColor">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </p>
          <p className="mt-[22px] mb-[53px]">
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim..
          </p>
        </div>
        <div className="btn flex flex-wrap gap-10 ">
          <button className="mx-auto xl:mx-0 mb-[8px] w-[200px] h-[59px] rounded-[50px] shadow-button bg-pinkColor  text-white font-semibold">
            Learn More
          </button>
          <div className="mx-auto xl:mx-0 flex items-center text-grayColor font-semibold">
            <img className="mr-4" src={PlayBtn} />
            Watch Video
          </div>
        </div>
      </div>
      <div className="mx-auto xl:mx-0 mt-11 w-[476px] h-[350px]  bg-[url(./assets/img/unsplash_LRXYS0tSyGc.png)] bg-center box-shadow-banner rounded-[50px]"></div>
    </div>
  );
}

export default AboutUs;
