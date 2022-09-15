import React from 'react'
import Product from './Product'

export default function ProductList({objects}) {
  return (
    <div className='productContainer'>
        {objects.map((p)=><Product productName={p.product_name} productPrice={p.price} productImg={p.image}/>)}
    </div>
  )
}
