import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export const ProductNavBarFilter = (props) => {
    // ------------- DISPLAYING PRODUCTS BY CATEGORY ---------------
    const searchByCategory=(category)=>{
    const fetchByCategory = async()=>{
        try {
            const res= await axios.get(`http://localhost:8800/productslist/${category}`)
                    props.setProducts(res.data)
                    console.log(res);
                } catch(err){
                console.log(err);
                }
            };
            fetchByCategory();
        };
  //--------------DISPLAYING PRODUCTS BY PRICE ASC ---------------
    const searchByPriceAsc= (price) =>{
          const fetchByPriceAsc = async()=>{
              try {
                  const res= await axios.get("http://localhost:8800/productslist/asc")
                  props.setProducts(res.data)
              } catch(err){
                  console.log(err)
              }
          }
          fetchByPriceAsc()
      };
  //--------------DISPLAYING PRODUCTS BY PRICE DESC ---------------
  const searchByPriceDesc= (price) =>{
      const fetchByPriceDesc = async()=>{
          try {
              const res= await axios.get("http://localhost:8800/productslist/desc")
              props.setProducts(res.data)
          } catch(err){
              console.log(err)
          }
      }
      fetchByPriceDesc()
    };

  //---------------------- DROP DOWN MENU -----------------------
    const [isOpen, setOpen] = useState(false);
  
    const handleDropDown = () => {
      setOpen(!isOpen);
    };
//--------------- DROP DOWN MENU: SORT BY PRICE------

    return (
      <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <button  onClick={() =>  searchByPriceAsc ()}className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"  >
             All Items
            </button>
            <button className="cursor-pointer font-bold text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-black"></span>
              <span className="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <button onClick={() =>  searchByCategory (`Tops`)} className="px-3 py-2 flex text-center items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <i className=" text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Tops</span>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() =>  searchByCategory (`Bottoms`)} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <i className=" text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Bottoms</span>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() =>  searchByCategory (`Dresses`)} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <i className=" text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Dresses</span>
                </button>
              </li>
            </ul>
          </div>

          <section className="dropdown">
            <button
              className="text-black font-bold bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              onClick={handleDropDown}
            >
              Sort By: (Price)
              <svg
                className="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
      
            <div id="dropdown"className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${isOpen ? "block" : "hidden"}`}>
              <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                  <li
                  >
                    <button  onClick={() =>  searchByPriceAsc ()} className="block py-2 px-4 hover:bg-gray-100" >
                      Low to High 
                    </button>
                  </li>
                  <li
                  >
                    <button onClick={() =>  searchByPriceDesc ()}className="block py-2 px-4 hover:bg-gray-100" >
                      High to Low
                    </button>
                  </li>
              </ul>
            </div>
            </section>
        </div>
     </div>
  )
}
