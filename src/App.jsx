import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto p-20 px-6">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
