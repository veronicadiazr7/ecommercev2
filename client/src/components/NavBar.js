import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact";
import { Products } from "../pages/Products/Products";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
      <div className="w-full bg-white-500 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
             <button>
                <h2 className="text-2xl font-mono  text-black font-bold hover:text-red-400">
                <Link to="home" element={<Home />}>
                    {" "}
                    Disciple Apparel{" "}
                  </Link>
                </h2>
              </button>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center font-mono text-lg justify-center  text-gray-600 space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 ">
                  <Link to="home" element={<Home />}>
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="text-black hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300">
                  <Link to="about" element={<About />}>
                    {" "}
                    About{" "}
                  </Link>
                </li>
                <li className="text-black hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300">
                  <Link to="shop" element={<Products />}>
                    {" "}
                    Shop{" "}
                  </Link>
                </li>
                <li className="text-black hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300">
                  <Link to="contact" element={<Contact />}>
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={` pb-6 mt-8 md:flex ml-7  md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <Link className="text-black hover:text-red-400"  to="Shop" replace element={<Products />}>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 -32 576 576"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Shopping Cart</span>
            </Link>
            <Link className="text-black hover:text-red-400 mx-1" to="About" element={<About />}>
      
    
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 22 22"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 9.07503C22 10.7199 21.2857 12.1591 20.1633 13.2899L12.5102 20.7944C12.3061 20.8972 12.2041 21 12 21C11.7959 21 11.5918 20.8972 11.4898 20.7944L3.83673 13.1871C2.71429 12.0563 2 10.5142 2 8.86943C2 7.3274 2.71429 5.88818 3.83673 4.75737C5.06122 3.62655 6.59184 2.90694 8.22449 3.00974C9.55102 3.00974 10.7755 3.52375 11.7959 4.34616C14.2449 2.39293 17.7143 2.59853 19.9592 4.86017C21.2857 5.88818 22 7.4302 22 9.07503Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Favorite Items</span>
            </Link>
            <Link className="text-black hover:text-red-400" to="Contact" element={<Contact />}>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 22 22"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">User Account</span>
            </Link>
          </div>
        </div>
      </div>
  );
}