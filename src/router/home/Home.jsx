import React from 'react'
import Product from '../../components/product/Product'
import Delivery from '../../components/delivery/Delivery'
import Catalog from '../../components/catalog/Catalog'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <>
    {/* <Product/> */}
    <Delivery/>
    <Catalog/>
    <Footer/>
    </>
  )
}

export default Home