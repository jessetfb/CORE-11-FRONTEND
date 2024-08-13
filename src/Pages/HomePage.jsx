import React from 'react';
import NavbarComponent from '../components/Navbar';
import Core from '../components/Core';
import HashtagsSection from '../components/HashtagsSection';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <HashtagsSection />
      <Core />
      <Footer/>
    </>
  );
};

export default Home;
