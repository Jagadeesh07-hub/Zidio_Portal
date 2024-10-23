import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-hero">
        <img src="https://pbs.twimg.com/profile_images/1800736411110506496/VV_h1yaj_400x400.jpg" alt="Company Hero" />
        <div className="hero-text">
          <h1>Welcome to Zidio Development</h1>
          <p>We innovate and provide the best tech solutions for modern businesses.</p>
          <img 
            className="extra-image" 
            src="https://media.licdn.com/dms/image/v2/D5622AQHm09YLlNWK8w/feedshare-shrink_800/feedshare-shrink_800/0/1722129074807?e=2147483647&v=beta&t=alcD5OSZB0Ge4lYY4SZTfxFKbCuSJvSCov0ik7LduF0" 
            alt="Zidio Logo"
          />
        </div>
      </div>

      <div className="home-content">
        <h2>Who We Are</h2>
        <p>
          At Zidio Development, we are committed to delivering top-notch services
          in cloud computing, software development, and more. Our mission is to
          help businesses around the globe scale their infrastructure with ease.
        </p>

        <h2>Our Expertise</h2>
        <div className="image-gallery">
          <div className="gallery-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqDeReMyKOCEAXLbTnCMy5eLBHQmO59RPoA&s" alt="Expertise 1" />
            <p>Cloud Solutions</p>
          </div>
          <div className="gallery-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoWIXGxLae9YFCZoK3z0NHM7J-C9lxbl-qG69L4dvMfM1hS8GnPbAVzhPDmBRmaIkhoU&usqp=CAU" alt="Expertise 2" />
            <p>Software Development</p>
          </div>
          <div className="gallery-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBu-b6aBhryy34BYkrcX3hSfsWld4WiPEXQ4fD9Qv3hy-YLKUjSwxFI2VQj25zs21pBY&usqp=CAU" alt="Expertise 3" />
            <p>Product Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
