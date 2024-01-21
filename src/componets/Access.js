import React from "react"
import CARACEES from "./../assets/images/car-acces.png"

const Access = () => {
  return (
    <section>
      <div className="section_container my-20">
        <h3>Beyond Car Rentals</h3>
        <p className="section_content">
          Explore our suite of curated services such as chauffeur, buggy and
          safe driver provided by exclusive partners
        </p>
        <img src={CARACEES} alt="caracces" className="mx-auto  w-4/5" />
      </div>
    </section>
  )
}

export default Access
