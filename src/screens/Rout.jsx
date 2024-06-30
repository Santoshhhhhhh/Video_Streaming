import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Rout = ({ product, setProduct}) => {
  return (
    <Routes>
      <Route path='/search' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
      <Route path='/search' element={<Product product={product} setProduct={setProduct} />} />
      <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default Rout;