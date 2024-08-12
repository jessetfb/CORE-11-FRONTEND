import React from 'react';
import CreateCore from '../components/CreateCore'; // Adjust the path if necessary
import NavbarComponent from '../components/Navbar';

const CreateCorePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-4">
        <h1>Create a New Core</h1>
        <CreateCore />
      </div>
    </>
  );
};

export default CreateCorePage;
