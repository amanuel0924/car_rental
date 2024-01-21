import React from "react"
import brandImg1 from "./../assets/images/cars-logo (1).png"
import brandImg2 from "./../assets/images/cars-logo (2).png"
import brandImg3 from "./../assets/images/cars-logo (3).png"
import brandImg4 from "./../assets/images/cars-logo (4).png"
import brandImg5 from "./../assets/images/cars-logo (5).png"

const Partners = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0 ">
        <img src={brandImg1} alt="brand" />
        <img src={brandImg2} alt="brand" />
        <img src={brandImg3} alt="brand" />
        <img src={brandImg4} alt="brand" />
        <img src={brandImg5} alt="brand" />
      </div>
    </section>
  )
}

export default Partners
