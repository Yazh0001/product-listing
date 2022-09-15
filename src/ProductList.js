import React from 'react'
import Product from './Product'

export default function ProductList({objects}) {
  return (
    <div className='productContainer'>
        {objects.map((p)=><Product productName={p.product_name} productPrice={p.price} productImg={p.image}/>)}


        <div className='bottom'>
          <img id='VectorBot' src={require('./Assets/Images/VectorBot.png')} alt='blob'></img>
          <div id='botGrape' className='grape'>CHILLED GRAPE</div>
        </div>
    </div>
  )
}
