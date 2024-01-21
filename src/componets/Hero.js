import React from "react"
import LOGO from "./../assets/images/car-logo.svg"

const Hero = () => {
  return (
    <section id="hero">
      <div className=" max-w-6xl mx-auto text-center mb-40 pt-16 px-10">
        <img src={LOGO} alt="carlogo" className=" w-44 h-32 mx-auto my-16" />
        <h3 className=" text-4xl mb-8 font-bold text-greyshBlue md:text-5xl">
          Book directly from local suppliers
        </h3>
        <p className=" text-2xl max-w-3xl mx-auto mb-10 text-lightgreyBlue">
          You have reached just the right place. carent.com is a leading car
          rental marketplace in Ethiopia.
        </p>
        <div className=" flex flex-col space-y-6 md:space-y-0 md:space-x-4 md:flex-row text-xl text-white justify-center  ">
          <a
            className=" bg-lightRed px-8 py-4 rounded-full hover:opacity-80 duration-200 shadow-lg"
            href="/#"
          >
            Download for IOS
          </a>
          <a
            className=" bg-darkerBlue px-8 py-4 rounded-full hover:opacity-80 duration-200 shadow-lg "
            href="/#"
          >
            Download for IOS
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
