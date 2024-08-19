import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import companyImg from "../assets/companyImg.png";

const Navbar = () => {
  const [nav, setNave] = useState(false);

  const handleNav = () => {
    setNave(!nav);
  };

  return (
    <header className="container mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-center h-24 px-4 xl:px-24">
        <h1 className="w-full">
          <img
            className="h-12 rounded-br-3xl rounded-tl-3xl"
            src={companyImg}
            alt="/"
          />
        </h1>
        <ul className="hidden text-white md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[60%] h-full border-r-gray-500 bg-blk flex flex-col md:hidden ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full m-4 mt-8">
            <img
              className="h-12 rounded-br-3xl rounded-tl-3xl"
              src={companyImg}
              alt="/"
            />
          </h1>
          <ul className="p-4 text-white uppercase">
            <li className="p-4 mt-6 border-b border-bl">Home</li>
            <li className="p-4 border-b border-bl">Company</li>
            <li className="p-4 border-b border-bl">Resources</li>
            <li className="p-4 border-b border-bl">About</li>
            <li className="p-4 border-b border-bl">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
