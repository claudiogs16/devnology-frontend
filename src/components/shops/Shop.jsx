import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems, allProduct }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Catg /> */}

          <div >
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Todos os Produtos</h2>
              </div>
              <div className='heading-right row '>
                <span>Ver Todas</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart allProduct={allProduct} addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
