import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'


function App() {

  const [otherSelected, setOtherSelected] = useState('About')

  return (
    <div className="App">
      <Header
        otherSelected={otherSelected}
        setOtherSelected={setOtherSelected}
      ></Header>
      <main>

        {otherSelected === 'About' ? (
          <About></About>
        ) : otherSelected === 'Portfolio' ? (
          <Portfolio></Portfolio>
        ) : otherSelected === 'Contact' ? (
          <Contact></Contact>
        ) : (
          <Resume></Resume>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
