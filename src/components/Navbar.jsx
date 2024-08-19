import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNave] = useState(false);

  const handleNav = () => {
    setNave(!nav);
  };

  return (
    <header className="max-w-screen-2xl container mx-auto">
      <div className="xl:px-24 flex h-24 justify-center items-center px-4">
        <h1 className="w-full text-3xl font-bold text-bl">SRL</h1>
        <ul className="md:flex hidden text-bl">
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
          <h1 className="w-full text-3xl font-bold text-bl mt-8 m-4">SRL</h1>
          <ul className="p-4 text-bl uppercase">
            <li className="p-4 mt-6 border-scdblk border-b">Home</li>
            <li className="p-4 border-scdblk border-b">Company</li>
            <li className="p-4 border-scdblk border-b">Resources</li>
            <li className="p-4 border-scdblk border-b">About</li>
            <li className="p-4 border-scdblk border-b">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
