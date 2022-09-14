import React from 'react';
import './product.css'
function App() {
  return (
    <>
      <div className='blobs'>
        <img id='VectorTopLeft' src={require('./Assets/Images/VectorTopLeft.png')} alt='plant'></img>
        <img id='VectorMidRight' src={require('./Assets/Images/VectorMidRight.png')} alt='plant'></img>
        <img id='VectorTopMid' src={require('./Assets/Images/VectorTopMid.png')} alt='plant'></img>
        <img id='VectorMidMid' src={require('./Assets/Images/VectorMidMid.png')} alt='plant'></img>
        <img id='VectorMidLeft' src={require('./Assets/Images/VectorMidLeft.png')} alt='plant'></img>
      
      
      </div>
      <div className='container1'>
        <div className='title'>LOREM IPSUM DOLOR SIT AMET.</div>
        <button>Read More</button>
      </div>
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
