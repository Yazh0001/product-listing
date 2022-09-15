import React from 'react'
import Product from './Product'
import axios from 'axios'

export default function ProductList({objects, setProductObjects}) {
  const loadMore = ()=>{
    axios.get('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products').then((res)=>{
        setProductObjects([...objects,...res.data[0]])
      })
  }
  return (
    <div className='productContainer'>
        {objects.map((p)=><Product productName={p.product_name} productPrice={p.price} productImg={p.image}/>)}

        <div className='bottom'>
          

          <img id='VectorBot' src={require('./Assets/Images/VectorBot.png')} alt='blob'></img>
          <div id='botGrape' className='grape'>CHILLED GRAPE</div>
          <div id='botParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</div>

          <button id='loadMore' onClick={loadMore}>Load More</button>
          
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
