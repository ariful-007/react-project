import { useEffect, useState } from "react";
import User from "./user";


const Users = () => {
  const[user,setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUser(data))
  })
  return (
    <div>
        <h1 className="text-5xl text-slate-800 font-bold mt-12 text-center">Our Users</h1>
        <p className=" mx-auto w-2/5 text-center mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
      <div className="container mx-auto px-12 flex mt-10 justify-between flex-wrap">
          {
            user.map(data=> <User data={data} key={data.id}></User>)
          }
      </div>
      
    </div>
  );
};

export default Users;