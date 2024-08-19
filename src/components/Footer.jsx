import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl container mx-auto">
      <div className="xl:px-24 h-24 px-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="col-span-2">
          <h1 className="font-bold text-bl text-3xl">SRL</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatum incidunt aut optio esse officiis voluptatem cum iure
            deserunt expedita alias corporis corrupti, illo voluptas molestias
            eaque commodi ut quibusdam?
          </p>
          <div className="flex my-2 lg:my-6 gap-5 md:justify-normal justify-center">
            <FaFacebookSquare size={30} className="mr-2" />
            <FaInstagram size={30} className="mr-2" />
            <FaTwitterSquare size={30} className="mr-2" />
            <FaLinkedinIn size={30} className="mr-2" />
          </div>
        </div>
        <div className="mt-2 lg:col-span-1 col-span-1">
          <div>
            <h6 className="font-medium">Services</h6>
            <ul className="pl-6">
              <li className="py-2">Researches</li>
              <li className="py-2">Data Analysis</li>
              <li className="py-2">Media Innovations</li>
              <li className="py-2">Project Management</li>
            </ul>
          </div>
        </div>
        <div className="mt-2 lg:col-span-1 col-span-1">
          <div>
            <h6 className="font-medium">Company</h6>
            <ul className="pl-6">
              <li className="py-2">About</li>
              <li className="py-2">Blog</li>
              <li className="py-2">Jobs</li>
              <li className="py-2">Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
