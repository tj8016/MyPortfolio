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
      <div className="m-0 p-0 w-[100vw] h-[100vh]  relative select-none">
        <Navbar/>
        <div className="mt-[84px] -z-[9999]">
            <Home id="home"/>
            <About id="about"/>
            <Skills id="skills"/>
            <Qualification id="qualification"/>
            <Project id="projects"/>
            <Contact id="contact"/>        
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Navbar from "./Component/Navbar";
// import Section from "./Component/Section";
// import dummyText from "./DummyText";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Skills } from "./components/Skills";
// import { Footer } from './components/Footer';
// import { Contact } from './components/Contact';
// import { Qualification } from './components/Qualification'
// import { Project } from './components/Project';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <div>
//         <Home id="section1"/>
//         <About id="section2"/>
//         <Skills id="section3"/>
//         <Qualification id="section4"/>
//         <Project id="section5"/>
//         <Contact/>        
//         <Footer/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
