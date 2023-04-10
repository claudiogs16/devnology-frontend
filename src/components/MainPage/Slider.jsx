import React from "react"
import SlideCard from "./SlideCard"

const SliderHome = ({allProduct}) => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard allProduct={allProduct} />
        </div>
      </section>
    </>
  )
}

export default SliderHome
