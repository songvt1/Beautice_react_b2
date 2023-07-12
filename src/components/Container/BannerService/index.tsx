function BannerService({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="banner-service w-[343px] h-[458px] rounded-[42px] flex flex-col items-center text-grayColor font-normal tracking-[1.6px]  bg-white box-shadow-banner mt-6">
      <div className="image w-[166px] h-[166px] my-[59px] rounded-[50px] background-image">
        <img src={image} />
      </div>
      <div className="title w-[263px] text-blueColor font-semibold text-center tracking-[0.6px] text-[18px] pb-[18px]">
        {title}
      </div>
      <p className="description w-[274px] text-[14px] tracking-[1.4px] font-normal text-center text-grayColor">
        {description}
      </p>
    </div>
  );
}

export default BannerService;
