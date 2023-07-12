import BannerProfessional from "../Container/BannerProfessional";
import professionalData from "../../assets/data/professional";

function Professional() {
  return (
    <div className="professional-container mt-[136px] ">
      <div className="professional">
        <p className="text-center text-[16px] font-semibold leading-[125%] text-pinkColor ">
          Professional Teams
        </p>
        <div className="text-center text-[36px] font-semibold leading-[125%] text-blueColor mt-[11px] mb-[19px]">
          The Professional expert
        </div>
        <div className="text-center text-[16px] tracking-[1.6px] font-normal leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </div>
      </div>
      <div className="professional-banner flex justify-evenly flex-wrap mt-[92px]">
        {professionalData.map((item, index) => (
          <BannerProfessional
            key={index}
            image={item.image}
            position={item.position}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Professional;
