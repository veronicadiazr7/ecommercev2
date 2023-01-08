import React, { Component } from "react";
import {Link } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About/About";
import { Products } from "../pages/Products/Products";
import Home from "../pages/Home";
export default class Footer extends Component {
  render() {
    return (
        <div>
          <footer className="bg-white  #f8fafc bottom-0 w-full border border-slate-300">
            <div className="grid grid-cols-2 gap-8 pt-8 px-6 md:grid-cols-4 font-mono">
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-light text-left">
                  <li className="mb-4">
                    <Link
                      to="Home"
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                      element={<Home />}
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="About"
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                      element={<About />}
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="Shop"
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300" replace
                      element={<Products/>}
                    >
                      {" "}
                      Shop{" "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="Contact"
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                      element={<Contact />}
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 text-left">
                  <li className="mb-4">
                    <Link
                      to="Contact"
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                      element={<Contact />}
                    >
                      {" "}
                      My Account{" "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="Contact"
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                      element={<Contact />}
                    >
                      {" "}
                      FAQ{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 text-left">
                  <li className="mb-3">
                    <Link
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                      Licensing
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="hover:bg-yellow-200 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className=" text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                  Contact Info
                </h2>
                <ul className="mb-4 text-gray-500 dark:text-gray-40 text-left">
                  <li>Disciple Apparel</li>
                  <li>1608 PR-25, San Juan, 00912</li>
                  <li>787-123-4567</li>
                </ul>
              </div>
            </div>
            <div className="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                <a
                  href="https://www.facebook.com/"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
                  </svg>
                  <span className="sr-only">TikTok page</span>
                </a>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                © 2022 <Link>Disciple Apparel</Link>. All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
  
    );
  }
}