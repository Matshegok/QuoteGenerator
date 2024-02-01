import { useState, useEffect } from 'react'
import './App.css';
import Quote from './Quote.jsx'; 
import { Heading } from '@chakra-ui/react'; 
import ThemeComp from './ThemeComp.jsx'


function App() { 
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null); 
  const [author, setAuthor] = useState(null); 
  const [url, setUrl] = useState(null); 

  useEffect(()=>{
    if (quote != null){
      console.log(quote)
      console.log(url)
    }
  }, [quote, author])


  return (
    <>
      <div className="app"> 
        <Heading as='h1' size='4xl' noOfLines={1}>Random Quote Generator</Heading>
        <Quote quote={quote} author={author} error={error}/>
        <ThemeComp setData={setData} setError={setError} setQuote={setQuote} setAuthor={setAuthor} setUrl={setUrl}/>
      </div>
    </>
  )
}

export default App
