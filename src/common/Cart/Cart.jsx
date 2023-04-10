import React from "react"
import "./style.css"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const Cart = ({ CartItem, AllProduct }) => {
  // Stpe: 7   calucate total of items
 
  const user_id = process.env.REACT_APP_USER_ID;

  const [allUserCart, setAllUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  


  function loadAllUserCart(){
    axios.get(process.env.REACT_APP_API_URL + `/carts/${user_id}`).then((data) => {
      console.log(data.data);
      setAllUserCart(data.data)
      
    }, (error)=>{
      console.log(error);
    });
  }


  function CalculateTotal(){
    let total = allUserCart.reduce((price, item) => price + item.quantity * item.price, 0);

    setTotalPrice(total);
  }


  useEffect(()=>{
    loadAllUserCart();
   
    
  },[])

  useEffect(()=>{
    CalculateTotal();
  }, [allUserCart])


  const decreaseQty = (product) => {
    axios.put(process.env.REACT_APP_API_URL + `/carts/decrement/${product.id}`).then((data) => {
      console.log(data.data);
      loadAllUserCart();
      
    }, (error)=>{
      console.log(error);
    });
  }

  const addToCart = (product) => {
    axios.put(process.env.REACT_APP_API_URL + `/carts/increment/${product.id}`).then((data) => {
      console.log(data.data);
      loadAllUserCart();
      
    }, (error)=>{
      console.log(error);
    });
  }

  const removeItem = (product) => {
    axios.delete(process.env.REACT_APP_API_URL + `/carts/${product.id}`).then((data) => {
      console.log(data.data);
      loadAllUserCart();
    }, (error)=>{
      console.log(error);
    });
  }




  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {allUserCart?.length === 0 && <h1 className='no-items product'>Nenhum item no carrinho</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {allUserCart?.map((item) => {
              const productQty = item?.quantity;
              

              


              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.image} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.quantity}
                      <span>${item.price * productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => removeItem(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Carrinho</h2>
            <div className=' d_flex'>
              <h4>Valor Total :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
