import React from "react"

export const BottomCta = () => {
  return (
    <section>
      <div className="section_container my-20">
        <h3>Download for IOS and Windows</h3>
        <p className="section_content mb-10">
          Available for free on the app store. download for mac ios sync with i
          cloude and you 're' ready to start renting car.
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
