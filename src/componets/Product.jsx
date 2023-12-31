/* eslint-disable */

const Product = ({items,hendelCard}) => {
  const {title,images,price,id} = items
  console.log(items)
  return (
    <div className=" w-[32%] p-7 bg-indigo-300 mb-6 rounded-lg">
      <div className=" flex">
          <div>
              <img src={images} alt="" />
              <h2 className=" text-black font-bold text-xl mt-2"> Price : ${price}</h2>
              <h1 className=" text-black font-bold text-lg mt-2"> Title : {title}</h1>
              <h1 className=" text-black font-bold text-lg mt-2"> ID : {id}</h1>
              <button onClick={()=> hendelCard(images)} className=" py-1 px-7 bg-teal-500 rounded-md w-full mt-3 text-lg font-bold">Details</button>
          </div>
      </div>
    </div>
  );
};

export default Product;