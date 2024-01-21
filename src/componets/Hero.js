import React from "react"
import LOGO from "./../assets/images/car-rental.png"

const Hero = () => {
  return (
    <section id="hero">
      <div className="section_container mb-40 pt-16 ">
        <img src={LOGO} alt="carlogo" className="  mx-auto my-16" />
        <h3>Book directly from local suppliers</h3>
        <p className=" text-2xl max-w-3xl mx-auto mb-10 text-lightgreyBlue">
          You have reached just the right place. carent.com is a leading car
          rental marketplace in Ethiopia.
        </p>
        <div className="btn_container">
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
