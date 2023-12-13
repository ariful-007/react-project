import Project from "./Project";
import imgOne from"../assets/project/img1.png"
import imgTow from"../assets/project/img2.png"
import imgThree from"../assets/project/img3.png"
import imgFore from"../assets/project/img4.png"
import imgSeven from"../assets/project/img5.png"
import imgEight from"../assets/project/img6.png"
import imgNine from"../assets/project/img7.png"

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl text-slate-800 font-bold mt-28 text-center">Featured Projects</h1>
      <p className=" mx-auto w-2/5 text-center mt-4"> project description provides a roadmap for stakeholders and communicates the vision without getting bogged down in details.</p>
      <div className=" flex  justify-center items-center mt-20">
          <ul className=" flex gap-5 ">
            <li className=" capitalize inline-block text-xl text-black  font-medium box-content py-2 px-7 border-2 text-center hover:bg-slate-800 hover:text-white">All Cases</li>
            <li className=" capitalize inline-block text-xl text-black  font-medium box-content py-2 px-7 border-2 text-center hover:bg-slate-800 hover:text-white">UI/UX Design</li>
            <li className=" capitalize inline-block text-xl text-black  font-medium box-content py-2 px-7 border-2 text-center hover:bg-slate-800 hover:text-white">Digital marketing</li>
            <li className=" capitalize inline-block text-xl text-black  font-medium box-content py-2 px-7 border-2 text-center hover:bg-slate-800 hover:text-white">Branding</li>
            <li className=" capitalize inline-block text-xl text-black  font-medium box-content py-2 px-7 border-2 text-center hover:bg-slate-800 hover:text-white">Web Develoment</li>
          </ul>
        </div>
        <div className="container mx-auto px-12 flex mt-10 justify-between flex-wrap">
            <Project img={imgOne} title="Wev Develoment"></Project>
            <Project img={imgTow} title="Branding"></Project>
            <Project img={imgThree} title="Digital marketing"></Project>
            <Project img={imgFore} title="UI/UX Design"></Project>
            <Project img={imgSeven} title="Web Designer"></Project>
            <Project img={imgEight} title="Blog Protfolio"></Project>
            <Project img={imgNine} title="Business WebSite"></Project>
            <Project img={imgThree} title="E-Commerce WebSite"></Project>
        </div>
    </div>
  );
};

export default Projects;