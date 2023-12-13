import image from '../assets/About/Aboute.png'
const Aboute = () => {
  return (
    <div>
      <div className="container mx-auto px-12 mt-12 flex justify-between">
          <div className=' w-3/4'>
          <h1 className="text-5xl text-slate-800 font-bold mt-10 ">About Us</h1>
          <p className=" mt-4 font-sans font-light w-[70%]">A business consultant is a professional with a wide array of skills who assists business owners with their endeavors. Consultants are knowledgeable because of their education and previous experience.</p>
          <h5 className="mt-6 font-sans font-light">Businesses often require business plans</h5>
          <h5 className="mt-6 font-sans font-light">Elevating Businesses, Empowering People</h5>
          <h5 className="mt-6 font-sans font-light">Human Resources or HR Consultant Company</h5>
          <button className="py-2 px-7 rounded-lg bg-teal-600 text-green-100 mt-6 hover:bg-gray-800">Read More</button>
          </div>
          <div className=' w-3/4'>
            <img className=' mt-10' src={image} alt="" />
          </div>

      </div>
    </div>
  );
};

export default Aboute;