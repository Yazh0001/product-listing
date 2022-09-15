import React from 'react'
import Product from './Product'

export default function ProductList({objects}) {
  return (
    <div className='productContainer'>
        {objects.map((p)=><Product productName={p.product_name} productPrice={p.price} productImg={p.image}/>)}


        <div className='bottom'>
          <img id='VectorBot' src={require('./Assets/Images/VectorBot.png')} alt='blob'></img>
          <div id='botGrape' className='grape'>CHILLED GRAPE</div>
          <div id='botParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</div>
          
          <div className='container3'>
            <div className='footerBlock'>
              <div className='footerTitle'>Company</div>
              <div className='footerItem'>About</div>
              <div className='footerItem'>Careers</div>
              <div className='footerItem'>Our Work</div>
              <div className='footerItem'>Contact</div>
            </div>
            <div className='footerBlock'>
              <div className='footerTitle'>Products</div>
              <div className='footerItem'>About</div>
              <div className='footerItem'>Careers</div>
              <div className='footerItem'>Our Work</div>
              <div className='footerItem'>Contact</div>
            </div>
            <div className='footerBlock'>
              <div className='footerTitle'>Follow Us</div>
              <div>
                <div className='followBox'></div>
                <div className='followBox'></div>
                <div className='followBox'></div>
                <div className='followBox'></div>
                <div className='followBox'></div>
                <div className='followBox'></div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}
