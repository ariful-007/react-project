import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products , setProduct] = useState([])

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])

  return (
    <div>
      <h1 className="text-5xl text-slate-800 font-bold mt-12 text-center">Our Products</h1>
        <p className=" mx-auto w-2/5 text-center mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
      <div className=" container mx-auto px-12 flex mt-10 justify-between flex-wrap">
          {
            products.map( items=> <Product items={items} key={items.id}></Product>)
          }
      </div>
    </div>
  );
};

export default Products;