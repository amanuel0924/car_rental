import React from "react"
import CAR from "./../assets/images/car.png"

const Futures = () => {
  return (
    <section>
      <div className="section_container my20">
        <div className="relative flex flex-col md:flex-row md:skew-x-32">
          <div className="md:w-1/2">
            <img
              src={CAR}
              alt="car"
              className="md:absolute top-14 right-[50%]"
            />
          </div>
          <div
            className=" flex flex-col text-center mt-16 mb-24 space-y-12 text-xl
          md:text-left md:mb-60 md:w-1/2 md:pl-16 "
          >
            <div>
              <h5>Rent a Car across the world</h5>
              <p className=" max-w-md text-lightgreyBlue ">
                Combining all our suppliers’ rental fleet, you can choose from
                car types, brands, models available in the world
              </p>
            </div>
            <div>
              <h5>Luxury and Sports Car Rentals</h5>
              <p className=" max-w-md text-lightgreyBlue ">
                Choose among a range of renowned brands: Ferrari, Rolls Royce,
                Mercedes
              </p>
            </div>
            <div>
              <h5>Self-drive cars</h5>
              <p className=" max-w-md text-lightgreyBlue ">
                Self-drive the car of your dreams today! best car rental options
                for stress-free travel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Futures
