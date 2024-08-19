import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import companyImg from "../assets/companyImg.png";

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-screen-2xl">
      <div className="grid h-24 grid-cols-2 gap-3 px-4 xl:px-24 lg:grid-cols-4">
        <div className="col-span-2">
          <h1 className="">
            <img
              className="h-12 rounded-br-3xl rounded-tl-3xl"
              src={companyImg}
              alt="/"
            />
          </h1>
          <p className="px-4 py-4 text-base text-justify">
            Survay Research Lanka Pvt Ltd is a data science and analytics
            company based in Sri Lanka. They specialize in research projects and
            provide data solutions for industries. Their expertise in data
            science drives informed decision-making and strategic planning,
            making them a key player in research and analytics.
          </p>
          <div className="flex justify-center gap-5 my-2 lg:my-6 md:justify-center">
            <FaFacebookSquare size={30} className="mr-2" />
            <FaInstagram size={30} className="mr-2" />
            <FaTwitterSquare size={30} className="mr-2" />
            <FaLinkedinIn size={30} className="mr-2" />
          </div>
        </div>
        <div className="col-span-1 mt-4 ml-14 lg:col-span-1">
          <div className="ml-16 lg:ml-0">
            <h6 className="font-medium">Services</h6>
            <ul className="">
              <li className="p-3">Researches</li>
              <li className="p-3">Data Analysis</li>
              <li className="p-3">Media Innovations</li>
              <li className="p-3">Project Management</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 mt-4 ml-14 lg:col-span-1">
          <div className="ml-16 lg:ml-0">
            <h6 className="font-medium">Company</h6>
            <ul className="">
              <li className="p-3">About</li>
              <li className="p-3">Blog</li>
              <li className="p-3">Jobs</li>
              <li className="p-3">Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
