import React, { Component } from "react";




export default class Contact extends Component {
  render() {
    return (
      <div className=" m-auto h-full bg-wrinkledpaper">
        {" "} 
        <div className="text-center pt-5 mb-3 ">
          <h1 className="bg-yellow-200 w-fit m-auto font-bold font-mono text-center uppercase tracking-wider sm:p-1 bg-white text-4xl border border-black  ease-in-out duration-300 ">
            Customer Care
          </h1>
        </div>
        <div className="grid place-items-center rounded-2xl shadow-sm w-3/4 m-auto ">
          <div className=" p-12 bg-white">
            <h1 className="text-xl font-semibold">
              Submit a Request <br></br>
              <span className="font-normal text-sm">
                Fill out the form below to get in touch with one of our team
                members. We will try to get back to you within 48 hours.
              </span>
            </h1>
            <form className="mt-6">
              <div className="flex justify-between gap-3">
                <span className="w-1/2 ">
                  <label
                    for="firstname"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    autocomplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span className="w-1/2">
                  <label
                    for="lastname"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="The disciple whom Jesus loved."
                    autocomplete="family-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
              </div>
              <label
                for="email"
                className="block mt-2 text-sm font-semibold text-gray-600 "
              >
                E-mail Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john-thebeloved7@gmail.com"
                autocomplete="email"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="inquiry-type"
                className="block mt-2 text-sm font-semibold text-gray-600 "
              >
                Inquiry Type
              </label>
              <input
                id="inquiry-type"
                type="text"
                name="inquiry-type"
                placeholder="Write the type of inquiry: Returns, Collaborations, or Other Questions..."
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="Order-num"
                className="block mt-2 text-sm font-semibold text-gray-600"
              >
                Order Number
              </label>
              <input
                id="order-num"
                type="number"
                name="order-num"
                placeholder="If applicable"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
              <label
                for="description"
                className="block mt-2 text-sm font-semibold text-gray-600 "
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                name="description"
                placeholder="How can we be of your service?"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="req-attachments"
                className="block mt-2 text-sm font-semibold text-gray-600 "
              >
                Attachments (add or drop any files here)
              </label>
              <input
                type="file"
                name="request-attachments"
                id="request-attachments"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <button
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-rose-300 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Submit Request
              </button>
              {/* <p class="flex justify-between inline-block mt-4 text-sm text-gray-500 cursor-pointer hover:text-black">
                  Already registered?
                </p> */}
            </form>
          </div>
        </div>
        <div className="text-center">
          <div class="py-5">
            <h2 className="font-bold text-lg"> We're here to help!</h2>
            <h3 className="font-semibold">Monday - Friday 8am - 5pm </h3>
            <p className="m-auto w-3/4">
              We do our best to reply within 72 business hours (business hours
              do not include weekends or holidays).
            </p>
          </div>
        </div>

      </div>
    );
  }
}