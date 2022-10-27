import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OurStory from "./components/OurStory";
import GallerySection from "./components/GallerySection";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <OurStory/>
      <GallerySection/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
