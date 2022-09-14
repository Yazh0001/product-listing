import React from 'react';
import './product.css'
function App() {
  return (
    <div>
      <img id='VectorTopLeft' src={require('./Assets/Images/VectorTopLeft.png')} alt='plant'></img>
      <img id='VectorMidRight' src={require('./Assets/Images/VectorMidRight.png')} alt='plant'></img>
      <img id='VectorTopMid' src={require('./Assets/Images/VectorTopMid.png')} alt='plant'></img>
      <img id='VectorMidMid' src={require('./Assets/Images/VectorMidMid.png')} alt='plant'></img>
      <img id='VectorMidLeft' src={require('./Assets/Images/VectorMidLeft.png')} alt='plant'></img>
      
      <div className='title'>LOREM IPSUM DOLOR SIT AMET.</div>
    </div>
  );
}

export default App;
