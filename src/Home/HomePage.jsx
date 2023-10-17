import React from 'react';
import './HomePage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../slider/Slider'; 
//import Slider from '@react-native-community/slider';


function HomePage() {
  return (

    <div className="home">
      <Header />
      <div className="hero">
        <h1>Welcome to PortfoMeister</h1>
        <p>Create and showcase your professional portfolio with ease.</p>
        <button className="cta-button">Get Started</button>
      </div>

      <section className="features">
        <div><h1>Features</h1></div>
      </section>

      <section className="testimonials">
        <div><h1>Testimonials</h1></div>
      </section>

      <section className="templates templates-section">
        <Slider />
        
      </section>
      

      <Footer />
    </div>
  );
}

export default HomePage;
