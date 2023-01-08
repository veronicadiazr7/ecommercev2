import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [email, setEmail]= useState({
      email:"",
  })
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setEmail((prev)=> ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(email)
  const handleClick = async e =>{
    e.preventDefault()
try{
  await axios.post("http://localhost:8800/newsletter",email)
}
catch(err){
}
  }
  return (
    
    <main className="h-full bg-wrinkledpaper" >
    
      {/* SLIDER CAROUSEL USED react-alice-carousel MODULE */}
      <section className=''>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="images/slide1.gif" className="w-full h-1/6 object-fit" alt="disciple apparel logo and mission"/>
      <img src="images/slide2.gif" className="w-full h-1/6 object-fit" alt="free shipping advertisement on first order with code: REVIVAL"/>
      <img src="images/slide3.gif" className="w-full h-1/6 object-fit" alt="two women modeling black and white with text 'Spreading the Good News in Style"/>
      </AliceCarousel>
      </section>

      {/* NEWSLETTER */}
      <section className=''>
         <div className="bg-yellow-300 text-left flex">
       <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
      <div className="xl:max-w-lg xl:ml-auto">
        <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/images/y2k-newsletter-photo.webp" alt="Woman workcationing on the beach"/>
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
          JOIN OUR SQUAD        
        </h1>
        <p className="mt-2 text-gray-900 sm:mt-4 sm:text-xl">
        Sign up to receive exclusive offers and store updates first.
        </p>
         <form>
              <div className="sm:p4">
                <label className="mt-2 text-gray-900 sm:mt-4 sm:text-xl" for="email">E-mail Address: </label>
                <input
                  className="w-7/12 centered rounded-md "
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder=" john-thebeloved7@gmail.com"
                onChange={handleChange}/>
              </div>
              <div className="text-left flex flex-row justify-evenly">
                <input
                  type="checkbox"
                  name="consent-checkbox"
                  id="consent-checkbox"
                  value="true"
                  required
                ></input>
                Yes, I would like to receive email communications{" "}
              </div>
              <div className="sm:p-6">
                <input
                  className="m-auto sm:p-2 items-center cursor-pointer bg-gray-900 text-white uppercase w-4/12 border-none outline-none rounded-md max-h-24"
                  type="submit"
                  value="SUBSCRIBE" onClick={handleClick}
                />
              </div>
            </form>
      </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
      <img className="absolute inset-0 h-full w-full object-cover object-center" src="/images/y2k-newsletter-photo.webp" alt="Woman flower outfit modeling"/>
      </div>
      </div>
      </section>
    </main>
  )
}
