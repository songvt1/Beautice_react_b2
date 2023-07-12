import LogoTwitter from "../../../assets/img/Twitter.png";
import LogoFacebook from "../../../assets/img/Facebook.png";
import LogoInstagram from "../../../assets/img/Instagram.png";

function BannerProfessional({
  image,
  name,
  position,
  description,
}: {
  image: string;
  position: string;
  name: string;
  description: string;
}) {
  return (
    <div className="banner-professional w-[424px] h-[626px] flex flex-col items-center rounded-[42px] mt-6 mx-2 hover:box-shadow-banner">
      <img
        className="image-avatar w-[146px] h-[146px] background-image mt-[91px] mb-[53px] rounded-[50px]]"
        src={image}
      />
      <div className="position text-pinkColor text-center text-[16px] font-semibold leading-[125%] ">
        {position}
      </div>
      <div
        className="name w-[263px] text-[18px] font-semibold text-center text-blueColor tracking-[0.6px]
      leading-[125%] mt-4 "
      >
        {name}
      </div>
      <div className="description w-[270px] text-center font-normal tracking-[1.4px] text-[14px] text-grayColor mt-5 mb-10">
        {description}
      </div>
      <div className="social flex ">
        <div className="twitter">
          <img src={LogoTwitter} />
        </div>
        <div className="facebook">
          <img src={LogoFacebook} />
        </div>
        <div className="instagram">
          <img src={LogoInstagram} />
        </div>
      </div>
    </div>
  );
}

export default BannerProfessional;
