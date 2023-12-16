import { SiIonic } from "react-icons/si";
import Button from "../componets/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Linkis =[
    {name:"Home",link:"/home"},
    {name:"About",link:"/about"},
    {name:"Services",link:"/services"},
    {name:"Blog",link:"/blog"},
    {name:"Contact",link:"/contact"},
  ];

  return (
    <div className=" shadow-md w-full top-0 left-0 bg-indigo-400">
      <div className=" md:flex items-center justify-between  py-4 md:px-10 container mx-auto px-12">
        <div className=" font-black text-3xl cursor-pointer flex items-center text-gray-950 ">
          <span className=" text-3xl text-pink-600 mr-1">
            <SiIonic />
          </span>
          <Link to="/home">AI-BD</Link>
        </div>
        
        <ul className=" md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {
            Linkis.map((link)=>(
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-gray-800 font-semibold hover:text-pink-600 duration-500" to={link.link}>{link.name}</Link>
              </li>
            ))
          }
          <Link to="/login"><Button>LogIn</Button></Link>
          <Link to="/registar"><Button>Sign Up</Button></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;