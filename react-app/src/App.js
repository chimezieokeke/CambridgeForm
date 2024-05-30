import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import React from 'react';


// pages
import Home from './pages/Home'
import About from './pages/About'



function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Cambridge Investment Research </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;