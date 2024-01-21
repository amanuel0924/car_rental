import React from "react"
import LOGO from "./../assets/images/car-rental.png"
import social1 from "./../assets/images/icon-facebook.svg"
import social2 from "./../assets/images/icon-twitter.svg"
import social3 from "./../assets/images/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className=" bg-gray-100">
      <div className="section_container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img
            src={LOGO}
            alt=""
            className="scale-50 w-64 h-44 my-10
          "
          />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="/#" className="hover:text-darkerBlue">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="/#" className="hover:text-darkerBlue">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="/#" className="hover:text-darkerBlue">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="/#" className="hover:text-darkerBlue">
                    Press Kit
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="/#" className="hover:text-darkerBlue">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-32 py-1">
              <a href="/#">
                <img src={social1} alt="" className="duration-200 ficon" />
              </a>
              <a href="/#">
                <img src={social2} alt="" className="duration-200 ficon" />
              </a>
              <a href="/#">
                <img src={social3} alt="" className="duration-200 ficon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
