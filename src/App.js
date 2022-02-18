import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Container from '@mui/material/Container';


function App() {
    const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </>
  );
}

export default App;
