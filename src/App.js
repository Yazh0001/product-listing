import React, {useState, useEffect} from 'react';
import './productListing.css'
import ProductList from './ProductList';
import axios from 'axios'
function App() {
  const [productObjects, setProductObjects] = useState([
    {
      "product_name": "semper interdum mauris",
      "image": "http://dummyimage.com/281x278.png/5fa2dd/ffffff",
      "price": 86.87,
    }])

    useEffect(()=>{
      axios.get('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products').then((res)=>{
        setProductObjects(res.data[0])
      })
    }, [])

  return (
    <>
      <div className='blobs'>
        <img id='VectorTopLeft' src={require('./Assets/Images/VectorTopLeft.png')} alt='blob'></img>
        <img id='VectorMidRight' src={require('./Assets/Images/VectorMidRight.png')} alt='blob'></img>
        <img id='VectorTopMid' src={require('./Assets/Images/VectorTopMid.png')} alt='blob'></img>
        <img id='VectorMidMid' src={require('./Assets/Images/VectorMidMid.png')} alt='blob'></img>
        <img id='VectorMidLeft' src={require('./Assets/Images/VectorMidLeft.png')} alt='blob'></img>
        <img id='VectorPlant' src={require('./Assets/Images/VectorPlant.png')} alt='blob'></img>
        <img id='Plant' src={require('./Assets/Images/pngwing 1.png')} alt='Plant'></img>

        
      
      </div>
      <div className='container1'>
        <div className='title'>LOREM IPSUM DOLOR SIT AMET.</div>
        <button className='readmore1'>Read More</button>
      </div>
      <div className='container2'>
        <div className='subtitle'>LOREM IPSUM DOLOR SIT AMET.</div>
        <div className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <button id='readmore2'>Read More</button>
      </div>

      <ProductList objects={productObjects}></ProductList>
      

      <nav>
        <div id='topgrape' className='grape'>Chilled Grape</div>
        <div id='options'>
          <div className='option'>Home</div>
          <div className='option'>About</div>
          <div className='option'>Blog</div>
          <div className='option'>Pricing</div>
        </div>
        <button id='login' >Login</button>
      </nav>
    </>
  );
}

export default App;
