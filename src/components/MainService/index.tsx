import serviceData from "../../assets/data/service";
import BannerService from "../Container/BannerService";

function MainService() {
  return (
    <div className="container mt-[130px]">
      <div className="service-content">
        <div className="text-pinkColor font-semibold text-center tracking-[0.4px] text-[16px]">
          Main Services
        </div>
        <div className="max-w-[450px] font-semibold text-center tracking-[0.5px] text-[36px] text-blueColor mx-auto">
          Learn services to focus on your beauty
        </div>
        <p className="max-w-[848px] text-grayColor text-center text-[16px] font-normal mx-auto tracking-[1.6px] mt-2">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="service-banner flex justify-center flex-wrap gap-[55px] mt-[3.75rem]">
        {serviceData.map((item, index) => (
          <BannerService
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MainService;
