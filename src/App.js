// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const bannerContent = { title: 'Title', text: 'Text', buttonType: 'primary' };
  const galleryImages = [
    "https://images.unsplash.com/photo-1556306510-31ca015374b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdsYXNzZXN8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1602703522866-fb486308da5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdsYXNzZXN8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxnbGFzc2VzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3Nlc3xlbnwwfDB8MHx8fDA%3D"
  ];

  return (
    <div>
      <Header />
      <Banner {...bannerContent} />
      <Gallery images={galleryImages} />
      <Footer />
    </div>
  );
}

export default App;