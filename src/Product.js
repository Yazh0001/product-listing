import React from 'react'

export default function Product({productName, productPrice, productImg}) {
  return (
    <div className='bigCard'>
        <div className='imgCard'>
            <img className='productImg' src={productImg} alt='ppp'></img>
        </div>
        <div className='productName'>{productName}</div>
        <div className='productPrice'>${productPrice}</div>
    </div>
  )
}
