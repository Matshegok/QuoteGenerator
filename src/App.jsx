import { useState, useEffect } from 'react'
import './App.css';
import ButtonComponent from './components/button.jsx'; 
import Quote from './components/Quote.jsx'; 
import { Heading } from '@chakra-ui/react'; 


function App() {
  return (
    <>
      <div className="app"> 
        <Heading as='h1' size='4xl' noOfLines={1}>Random Quote Generator</Heading>
        <Quote />
        <ButtonComponent />
       </div>
    </>
  )
}

export default App
