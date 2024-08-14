import React, { useState } from 'react';
import NavbarComponent from '../components/Navbar';
import Core from '../components/Core';
import HashtagsSection from '../components/HashtagsSection';
import Footer from '../components/footer';

const Home = () => {
  const [cores, setCores] = useState([]);



  return (
    <>
      <NavbarComponent />
      <HashtagsSection />
      <Core cores={cores} />
      <Footer />
    </>
  );
};

export default Home;
