/* eslint-disable */

const User = ({data}) => {
  const{id,name,email} = data
  return (
    <div className="w-[32%] p-7 bg-indigo-300 mb-6 rounded-lg">
      <h1 className=" text-lg font-bold text-gray-900">ID : {id}</h1>
      <h1 className=" text-lg font-bold text-gray-900">Name : {name}</h1>
      <h1 className=" text-lg font-bold text-gray-900">Email : {email}</h1>
      <button onClick={()=>heanderAddToCard(data)} className=" p-1 w-full bg-yellow-50 text-center text-lg text-gray-900 mt-3 rounded font-bold">
        Details</button>
    </div>
  );
};

export default User;