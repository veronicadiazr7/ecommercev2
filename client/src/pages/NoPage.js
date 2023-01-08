import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const NoPage = () => {
    return (
        <div className="h-full bg-gray-200">
         <div class="h-screen w-screen  flex items-center">
          <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div class="max-w-md">
                <div class="text-5xl font-dark font-bold">404</div>
                  <p
                    class="text-2xl md:text-3xl font-light leading-normal"
                  >Sorry, we couldn't find this page. </p>
                <p class="mb-8">Go back to our homepage to choose a new direction.</p>
                
                <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-black bg-pink-500 active:bg-pink-500 hover:bg-pink-600"><Link to="/" element={<Home />}>Back to homepage</Link></button>
          </div>
            <div class="max-w-lg">
      </div> 
        </div>
        </div>
        </div>
    );
  };
  
  export default NoPage;