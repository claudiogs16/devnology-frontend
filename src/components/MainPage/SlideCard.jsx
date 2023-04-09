import React, { useEffect, useState } from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios"

const SlideCard = () => {


  const [allProduct, setAllProduct] = useState(null);


  useEffect(()=>{
    axios.get(`http://devnology.test/api/products`).then((data) => {
      console.log(data);
      setAllProduct(data.data)
      
    }, (error)=>{
      console.log(error);
    });
    
  }, [])



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {allProduct?.slice(0,8).map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value.name}</h1>
                  <p>{value.description}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img className="cover" src={value.images[0]} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
