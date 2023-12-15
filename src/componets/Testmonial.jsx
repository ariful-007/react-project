import image from "../assets/Test/Vector.png"
import image1 from "../assets/Test/test.png"
const Testmonial = () => {
  return (
    <div className="container mx-auto px-12 mt-12 flex justify-between">
      <div className=' w-[50%]'>
      <h1 className="text-5xl text-slate-800 font-bold mt-10" >Testimonial</h1>
      <img className=" mt-14" src={image} alt="" />
      <p className=" w-3/5 mt-4 font-sans font-light">must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth</p>
      <h3 className=" text-gray-900 font-sans font-bold mt-12 text-lg">Justine Marshall</h3>
      <h4>Web Developer</h4>
      </div>
      <div className=' w-[40%]'>
          <img className="mt-16" src={image1} alt="" />
      </div>
    </div>
  );
};

export default Testmonial;