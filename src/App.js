import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from '../src/components/section1/index'
import Header from '../src/components/header/index'
import Section2 from '../src/components/section2/index'
import Section3 from '../src/components/section3/index'
import Section4 from '../src/components/section4/section4'
import Section5 from '../src/components/section5/section5'

function App() {
  return (
    <>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4/>
    <Section5/>
  </>
  );
}

export default App;
