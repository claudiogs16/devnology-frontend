import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

const Home = ({allProduct}) => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome allProduct={allProduct} />
        </div>
      </section>
    </>
  )
}

export default Home
