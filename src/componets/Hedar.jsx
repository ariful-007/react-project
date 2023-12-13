import { Link } from "react-router-dom";

const Hedar = () => {
  return (
    <nav className=" py-4 bg-indigo-300">
      <div className=" container mx-auto px-12 flex justify-between items-center">
        <div>
          <Link to="/home" className=" uppercase text-4xl font-extrabold	 text-slate-950 ">Ai-bd</Link>
        </div>
        <div>
          <ul className=" flex gap-8 ">
          <li><Link to="home" className=" text-slate-950  font-normal text-lg hover:text-slate-200">Home</Link></li>
          <li><Link to="about" className=" text-slate-950  font-normal text-lg hover:text-slate-200">About</Link></li>
          <li><Link to="services" className=" text-slate-950  font-normal text-lg hover:text-slate-200">Services</Link></li>
          <li><Link to="blog" className=" text-slate-950  font-normal text-lg hover:text-slate-200">Blogo</Link></li>
          <li><Link to="contact" className=" text-slate-950  font-normal text-lg hover:text-slate-200">Contact</Link></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Hedar;