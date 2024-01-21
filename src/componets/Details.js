import React from "react"
import SmCar1 from "./../assets/images/small-car-logo (1).png"
import SmCar2 from "./../assets/images/small-car-logo (3).png"
import SmCar3 from "./../assets/images/small-car-logo(5).png"

const Details = () => {
  return (
    <section>
      <div className="section_container my-20">
        <h3>About Our Campany</h3>
        <p className="section_content mb-16">
          We work with 200+ local car rental companies in World
        </p>
        <div
          className=" flex flex-col items-center justify-between space-y-16 
        md:flex-row md:space-y-0 md:space-x-12"
        >
          <div className="flex flex-col items-center space-y-5">
            <img src={SmCar1} alt="logo" />
            <h5>Sport Car</h5>
            <p className=" max-w-md text-lightgreyBlue">
              From high-end supercar rentals such as Ferrari, Lamborghini and
              Rolls Royce
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src={SmCar2} alt="logo" />
            <h5>Family Car</h5>
            <p className=" max-w-md text-lightgreyBlue">
              From high-end supercar rentals such as Ferrari, Lamborghini and
              Rolls Royce
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src={SmCar3} alt="logo" />
            <h5>Pickup Car</h5>
            <p className=" max-w-md text-lightgreyBlue">
              From high-end supercar rentals such as Ferrari, Lamborghini and
              Rolls Royce
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
