import React from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Content from "./Component/Content";
import Content2 from "./Component/Content2";
import Content3 from "./Component/Content3";
import Content4 from "./Component/Content4";



function App() {
  return (
    <div className="App bg-black">
      
     <Navbar />
        <HeroSection />
        <Content2 />
        <Content />
        <Content3 />
        <Content4/>
        
        
        
      
    </div>
  );
}



export default App;
