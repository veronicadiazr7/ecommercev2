import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import HeroImage from './HeroImage';
import { ProductCard } from './ProductCard';
import { ProductNavBarFilter } from './ProductNavBarFilter';


export const Products = () => {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        const fetchAllProducts = async()=>{
            try {
                const res= await axios.get("http://localhost:8800/productslist")
                // console.log(res)
                setProducts(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    },[],
    )
  return (
    <div className=" bg-wrinkledpaper">
      <HeroImage />
      <main>
     <ProductNavBarFilter setProducts={setProducts}/>
        <section>
          <div className=" mt-8 mb-14 h-6 ">
              <h1 className="text-3xl p-2 border-black border border-solid font-mono uppercase text-center tracking-wider bg-yellow-200 font-bold w-3/4 m-auto"> Product List{" "}</h1>
          </div>
      </section>
    <ProductCard products={products}/>
      </main>
    </div>
  )
}
