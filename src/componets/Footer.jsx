import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-sky-400 py-28">
      <div className="container mx-auto px-12 flex mt-10 justify-between flex-wrap">
        <div>
          <a href="#" className=" text-5xl text-gray-950 font-black uppercase">Ai-bd</a>
          <p className=" text-lg font-semibold text-gray-800 cursor-pointer mt-2 w-3/5">Making the world a better place through constructing elegant hierarchies.</p>

          <div className=" flex gap-5 mt-3">

          <div className=" w-14 h-14 bg-gray-900  rounded-full relative hover:bg-pink-600 ">
            <a href="#" className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-50 text-2xl font-bold" ><FaFacebookF /></a>
          </div>
          <div className=" w-14 h-14 bg-gray-900  rounded-full relative hover:bg-pink-600 ">
            <a href="#" className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-50 text-2xl font-bold" ><FaLinkedinIn /></a>
          </div>
          <div className=" w-14 h-14 bg-gray-900  rounded-full relative hover:bg-pink-600 ">
            <a href="#" className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-50 text-2xl font-bold" ><FaInstagram /></a>
          </div>
          <div className=" w-14 h-14 bg-gray-900  rounded-full relative hover:bg-pink-600 ">
            <a href="#" className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-50 text-2xl font-bold" ><FaTwitter /></a>
          </div>

          </div>
        </div>
        
        <div>
          <h1 className=" text-gray-950 font-black text-2xl uppercase mb-4">Solutions</h1>
          <ul>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Marketing</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Analytics</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Commerce</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Insights</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-gray-950 font-black text-2xl uppercase mb-4">Support</h1>
          <ul>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Pricing</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Documentation</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Guides</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-gray-950 font-black text-2xl uppercase mb-4">Company</h1>
          <ul>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">About</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Blog</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Press</li>
            <li className=" text-lg font-semibold text-gray-800 cursor-pointer mb-1 hover:text-pink-600">Partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;