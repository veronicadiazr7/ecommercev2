import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="h-full bg-wrinkledpaper">
        <div className=" py-5 mb-14 h-6 ">
          {" "}
          <h1 className="text-3xl p-2 border-black border border-solid font-mono uppercase text-center tracking-wider bg-yellow-200 font-bold w-3/4 m-auto">
            About Us{" "}
          </h1>
        </div>

        <section className="">
        <div class="bg-teal-800 flex">
    <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
      <div class="xl:max-w-lg xl:ml-auto">
  
        <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/images/choose-used.webp" alt="Clothing"/>
        <h1 class="text-pink-300 mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl font-mono">
        Reduce Waste.{" "}
        </h1>
        <p class="mt-2 text-pink-300 sm:mt-4 sm:text-xl font-mono">
        Disposing Of Unwanted Clothing Also Takes A Toll On The
        Environment. In The United States, Individuals Throw Out 60 To 80
              Pounds Of Textile Waste Each Year. It Can Take Months And Even
              Years For These Materials To Fully Break Down In Landfills! By
              Choosing To Buy Secondhand Clothing Instead Of Brand New, You
              Reduce Waste And Help The Planet.
        </p>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img class="absolute inset-0 h-full w-full object-cover object-center" src="/images/choose-used.webp" alt="Clothing"/>
    </div>
  </div>
        </section>
        <section className="font-mono">
          <h2 className="m-4 text-black uppercase text-center tracking-wider text-2xl font-mono border border-black bg-emerald-100 font-bold">
            Spreading the Gospel and Fighting Against Climate Change
          </h2>
          <h3 class="m-4 text-black uppercase text-center tracking-wider text-2xl font-mono border border-black bg-red-100 font-bold">
            * Our actions *
          </h3>
          <p class=" bg-slate-100 bg-opacity-50 m-auto px-4 text-center justify-justify mb-4" >
            God has clearly placed humans in a position of responsibility over
            the creation. <br />
            <strong className=""> Genesis 2:15 </strong> says <br />
            <i className="text-md">
              “The Lord God took the man and put him in the Garden of Eden to
              work it and take care of it.”
            </i>
            <br />
              We recognize that all created things belong to God and that we are
            accountable to Him as stewards of the creation. God commissions us
            to rule over the creation in a way that sustains, protects, and
            enhances his works so that all creation may fulfill the purposes God
            intended for it. We must manage the environment not simply for our
            own benefit but for God′s glory.
          </p>
        </section>
        <section className="bg-gray-100">
        <div class="bg-teal-800 flex">
    <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
      <div class="xl:max-w-lg xl:ml-auto">
  
        <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/images/apparel.webp" alt="Clothing rack with vintage clothing pieces"/>
        <h1 class="text-pink-300 mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl font-mono">
        Curate A One-Of-A-Kind Wardrobe.
        </h1>
        <p class="mt-2 text-pink-300 sm:mt-4 sm:text-xl font-mono">
        Whether You Want To Stay On Top Of The Latest Trends Or Express
              Your Individuality With Unique And Vintage Clothing, Thrift
              Shopping Allows You To Create A Wardrobe That’s Completely
              One-Of-A-Kind. Thrift Shopping Is A Lot Like A Treasure Hunt: You
              Never Know What You Might Find!
        </p>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img class="absolute inset-0 h-full w-full object-cover object-center" src="/images/apparel.webp" alt="Clothing rack with vintage clothing pieces"/>
    </div>
  </div>
        </section>

      </div>
    );
  }
}