import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto p-20 px-6">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
      </div>
    </div>
  );
};

export default App;
