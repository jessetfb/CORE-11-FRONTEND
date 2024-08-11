import React from 'react';
import NavbarComponent from '../components/Navbar';
import Core from '../components/Cores';
import HashtagsSection from '../components/HashtagsSection';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <HashtagsSection />
      <Core />
    </>
  );
};

export default Home;
