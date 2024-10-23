import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import TeamProfiles from './components/TeamProfiles';
import ClientReviews from './components/ClientReviews';
import AchievementsGallery from './components/AchievementsGallery';
import Careers from './components/Careers';
import MeetTheTeam from './components/MeetTheTeam';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/team" element={<TeamProfiles />} />
            <Route path="/reviews" element={<ClientReviews />} />
            <Route path="/achievements" element={<AchievementsGallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/videos" element={<MeetTheTeam />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
