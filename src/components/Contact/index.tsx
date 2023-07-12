import ContactImg from "../../assets/img/Contact.png";
function Contact() {
  return (
    <div className="contact-container flex justify-between flex-wrap mt-0 xl:mt-[170px]">
      <div className="image-contact mt-0 mx-auto xl:mx-0 xl:mt-[156px]">
        <img src={ContactImg} />
      </div>
      <div className="container-content mt-0 mx-auto xl:mx-0">
        <div className="content">
          <p className="text-[16px] font-semibold leading-[125%] text-pinkColor">
            Contact Us
          </p>
          <div className="max-w-[404px] text-[36px] font-semibold  leading-[125%] text-blueColor mt-[10px] mb-[20px]">
            Send your inquiry to our expert team
          </div>
          <div className="max-w[497] text-[16px] font-normal tracking-[1.6px] text-grayColor">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </div>
        </div>
        <div className="contact-form w-full xl:w-[520px] font-normal text-grayColor flex flex-col mt-[48px]">
          <div className="input-name flex justify-between">
            <input
              className="input w-[46%]"
              type="text"
              placeholder="First name"
            />
            <input
              className="input w-[46%]"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input className="input" type="text" placeholder="Email address" />
          <input className="input" type="text" placeholder="Subject message" />
          <textarea className="textarea" placeholder="Your inquiry here" />
          <button className="w-[248px] h-[58px] bg-pinkColor rounded-[50px] text-whiteColor font-semibold text-[16px] tracking-[1.6px]  mt-4 lg:mt-[82px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
