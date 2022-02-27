// This is a react functional component

import React from 'react';
import {Home,About,Services,Skills,Work,Projects,Testimonials,Contact,Footer} from './container';
import {Navbar} from './components';
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Work />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;