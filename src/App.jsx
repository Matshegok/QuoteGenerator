import { useState, useEffect } from 'react'
import './App.css';
import Quote from './Quote.jsx'; 
import { Heading } from '@chakra-ui/react'; 
import ThemeComp from './ThemeComp.jsx'


function App() {
  const [theme, setTheme] = useState(null); 
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null); 
  const [author, setAuthor] = useState(null); 

  return (
    <>
      <div className="app"> 
        <Heading as='h1' size='4xl' noOfLines={1}>Random Quote Generator</Heading>
        <Quote theme="happiness"/>
        <ThemeComp />


       </div>
    </>
  )
}

export default App
