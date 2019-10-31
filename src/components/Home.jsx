import React from 'react';

import Homepage from './homepage/Homepage';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


function Home() {
  return (

    <div>
      <Navbar/>
      <Homepage/>
      <Footer />
    </div>
  );
}

export default Home;