/* eslint-disable */
const Detailes = ({data}) => {
  const{title,images,price,id} = data
  return (
    <div className="min-h-screen bg-indigo-100 mt-3 mb-3">
      <div className=" container mx-auto px-12 flex justify-between flex-wrap">
        <div className=" w-[50%] bg-slate-500 p-12">
            <img src={images} alt="" />
        </div>
        <div className=" w-[40%] bg-slate-900 p-12">
          <h1>{title}</h1>
          <h1>{price}</h1>
          <h1>{id}</h1>
        </div>
      </div>
    </div>
  );
};

export default Detailes;