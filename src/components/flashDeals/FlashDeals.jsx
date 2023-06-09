import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const FlashDeals = ({ productItems, addToCart, allProduct }) => {

  

  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Mais vendidos</h1>
          </div>
          <FlashCard allProduct={allProduct} productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
