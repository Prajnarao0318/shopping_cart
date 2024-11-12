import React from 'react';
import Navbar from './Navbar';
import './App.css';
import CarouselComponent from './components/CarouselComponent';
import CardComponent from './components/CardComp';
import FooterComponent from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <main>
      <h1> Welcome to Quickkart</h1>
      {
        <p>QuickKart is a fast and user-friendly shopping cart app designed to make online shopping seamless, personalized, and hassle-free.</p>
      }
      <CarouselComponent/><hr style={{width:"80%"}}/>
      <CardComponent/>
      <FooterComponent/>
    </main>
   
  </div>
  
  );
}

export default App;
