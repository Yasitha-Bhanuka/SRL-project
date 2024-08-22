import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col gap-3 px-4 xl:px-24 md:flex-row">
        <div className="flex-1">
          <h1 className="px-4 text-3xl font-bold md:text-2xl">Who we are</h1>
          <p className="px-4 py-4 text-base text-justify">
            Survey Research Lanka (Private) Limited was established on the 28th
            of September 1989, fulfilling a long-felt need for a totally
            independent, full service Marketing, Opinion and Social Research
            Consultancy in Sri Lanka.
          </p>
          <div className="flex justify-center gap-5 my-2 lg:my-6 md:justify-center">
            <FaFacebookSquare size={30} className="mr-2" />
            <FaInstagram size={30} className="mr-2" />
            <FaTwitterSquare size={30} className="mr-2" />
            <FaLinkedinIn size={30} className="mr-2" />
          </div>
        </div>
        <div className="flex flex-row justify-around flex-1">
          <div className="">
            <h6 className="font-medium">Services</h6>
            <ul className="">
              <li className="p-3">Researches</li>
              <li className="p-3">Data Analysis</li>
              <li className="p-3">Media Innovations</li>
              <li className="p-3">Project Management</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium">Company</h6>
            <ul className="">
              <li className="p-3">About</li>
              <li className="p-3">Blog</li>
              <li className="p-3">Jobs</li>
              <li className="p-3">Careers</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
