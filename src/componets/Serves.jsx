
const Serves = ({title,Detailes,img}) => {
  return (
    <div className="w-[32%] p-7 bg-indigo-300 mb-6 rounded-lg">
      <img className="rounded-lg" src={img} alt="" />
      <h1 className=" text-2xl font-sans font-semibold text-gray-900 mt-3">{title}</h1>
      <p className=" mt-3">{Detailes} </p>
        <button className=" py-2 px-7 rounded-lg bg-teal-600 text-green-100 mt-3 hover:bg-gray-800">More Detailes</button>
    </div>
  );
};

export default Serves;