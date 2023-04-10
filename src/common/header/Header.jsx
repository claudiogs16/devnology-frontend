import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, search }) => {
  return (
    <>
      <Head />
      <Search search={search} CartItem={CartItem} />
      <Navbar />
    </>
  )
}

export default Header
