import React from "react"
import LOGO from "./../assets/images/RedRoughCar.svg"

const Hero = () => {
  return (
    <section id="hero">
      <div className=" max-w-6xl mx-auto text-center mb-40 pt-16 px-10">
        <img src={LOGO} alt="carlogo" />
      </div>
    </section>
  )
}

export default Hero
