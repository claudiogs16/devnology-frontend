import React, { useContext } from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import searchContext from "../../contexts/SearchContext"

const Search = ({ CartItem, search }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const {searchProduct, setSearchProduct} = useContext(searchContext);


  const searchProductInput = (value) => {
    console.log(value)
    setSearchProduct(value)
  }

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {/* <img src={logo} alt='' /> */}
            <h1 className="title"><Link to='/'>Devnology</Link></h1>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Pesquisar Produtos...'  onChange={(event) => searchProductInput(event.target.value)}  />
            <span>Todas</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
