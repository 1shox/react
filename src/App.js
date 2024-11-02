import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';    
function App() {
  return (
    <div className="App">
        <div>
        <Navbar />
        </div>
        <div className='main'>
          Main
        </div>
        <div>
        <Footer />
        </div>
    </div>
  );
}

export default App;
