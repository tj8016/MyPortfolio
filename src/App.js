import React from 'react'
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Qualification } from './components/Qualification'
import { Project } from './components/Project';

function App() {
  return (
    <>
      <div className="m-0 p-0 w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto relative select-none">
        <Navbar/>
        <div className="mt-[85px] -z-[9999]">
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
