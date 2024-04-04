import React from 'react'
import { CartState } from './context/Context'
import Singleproduct from './Singleproduct';
import "./style.css"

function Home ()  {
  const {state:{products}}= CartState();
  console.log(products)
  return (
    
    <div className='home'>
      <div className='container'>
        {products.map((product)=>{
         return <Singleproduct  product={product} key={product.id}/>
        })}
      </div>
    </div>
  )
}

export default Home
