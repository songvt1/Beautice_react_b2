import Frame1 from "../../assets/img/Frame1.png";

function Slide() {
  return (
    <>
      <div className="container flex flex-col mt-7 gap-8 lg:mt-48 lg:flex-row lg:justify-between ">
        <div className="content mt-[10px] ml-10">
          <h1 className="text-blueColor font-semibold text-[36px] leading-[125%] max-w-[430px] lg:text-5xl lg:leading-snug  ">
            Clinic & beauty consultant
          </h1>
          <p className="text-blueColor  max-w-[474px] leading-normal font-medium text-[16px] tracking-[1.6px]">
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <button className="w-[200px] h-[58px] rounded-[50px] bg-pinkColor text-white font-semibold tracking-[1.6px] mt-8">
            More Details
          </button>
        </div>
        <div className="image ">
          <img className="w-9/12 lg:w-full mx-auto" src={Frame1} />
        </div>
      </div>
      <div className="change-slide flex justify-center items-center mt-24 gap-1">
        <button className="bg-[#EEEEEE] w-[22px] h-1 rounded-[50px]"></button>
        <button className="bg-[#414880] w-[22px] h-2 rounded-[50px]"></button>
        <button className="bg-[#EEEEEE] w-[22px] h-1 rounded-[50px]"></button>
      </div>
    </>
  );
}

export default Slide;
