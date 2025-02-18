import React from "react";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Features from "./section/Features";
import Pricing from "./section/Pricing";
import Faq from "./section/Faq";
import Testimonial from "./section/Testimonial";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonial />
    </main>
  );
};

export default App;
