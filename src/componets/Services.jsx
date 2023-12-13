import Serves from "./Serves";
import imgOne from "../assets/Serves img/img1.png"
import imgTow from "../assets/Serves img/img2.png"
import imgThree from "../assets/Serves img/img3.png"
import imgForue from "../assets/Serves img/img4.png"
import imgFive from "../assets/Serves img/img5.png"

const Services = () => {
  return (
    <div>
      <h1 className="text-5xl text-slate-800 font-bold mt-12 text-center">Our services</h1>
      <p className=" mx-auto w-2/5 text-center mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
      <div className="container mx-auto px-12 flex mt-10 justify-between flex-wrap">
        <Serves title="Web Developement" Detailes="There are many variations of passages of 
        Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected" img={imgTow}></Serves>
        <Serves title="Company Management" Detailes="There are many variations of passages of 
        Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected" img={imgOne} ></Serves>
        <Serves title="Financial Services" Detailes="There are many variations of passages of 
        Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected" img={imgTow}></Serves>
        <Serves title="Business Solution" Detailes="There are many variations of passages of 
        Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected" img={imgThree}></Serves>
        <Serves title="Strategy and Planning" Detailes="There are many variations of passages of 
        Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected" img={imgForue}></Serves>
        <Serves title="Advanced Analytics" Detailes="There are many variations of passages of 
        Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected" img={imgFive}></Serves>
      </div>
    </div>
  );
};

export default Services;