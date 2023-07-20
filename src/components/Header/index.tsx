import MainLogo from "../../assets/img/MainLogo.png";
import Menu from "../../assets/img/menu.png";
import { useState } from "react";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="container w-full flex justify-between items-center ">
        <img className="mt-[1px] ml-[-4px] flex-shrink-[5]" src={MainLogo} />
        <nav className="nav">
          <ul className="hidden sm:hidden md:flex gap-x-12 mt-[-10px] font-medium text-grayColor tracking-wider">
            <li>
              <a className="font-semibold text-blueColor ">Home+</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </nav>
        <button className="hidden sm:max-lg:hidden xl:inline-block w-[158px] h-[52px] rounded-[50px] text-center bg-pinkColor text-whiteColor tracking-[1.6px] font-semibold mt-[-10px]">
          Contact
        </button>
        <div
          className="menuLogo block md:hidden flex-shrink-0"
          onClick={handleShow}
        >
          <img src={Menu} />
        </div>
      </div>
      {showMenu && (
        <nav className="nav-menu flex flex-col items-end md:hidden mt-[10px] mr-[20px]">
          <ul className="flex flex-col gap-y-1 mt-[-10px] font-medium text-grayColor tracking-wider">
            <li>
              <a
                onClick={handleShow}
                className="font-semibold text-blueColor float-right "
              >
                Home+
              </a>
            </li>
            <li>
              <a onClick={handleShow} className="font-semibold float-right ">
                About
              </a>
            </li>
            <li>
              <a onClick={handleShow} className="font-semibold float-right ">
                Service
              </a>
            </li>
            <li>
              <a onClick={handleShow} className="font-semibold float-right ">
                Gallery
              </a>
            </li>
            <li>
              <a onClick={handleShow} className="font-semibold float-right ">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
