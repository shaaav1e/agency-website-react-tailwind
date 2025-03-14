import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-50 blur-3xl"></div>
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
        </div>
      </main>
    </>
  );
}

export default App;
