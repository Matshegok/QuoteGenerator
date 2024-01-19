import React from 'react';
import './Quote.css';
import { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'


function Quote(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [quote, setQuote] = useState(null); 
    const [author, setAuthor] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
          try {


            //You can create an account on API ninjas to get a personal API key. Use the Link in apiUrl
            const apiKey = 'my_api';
            const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=success'; 

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                  'X-API-Key': `${apiKey}`,
                  'Content-Type': 'application/json',
                },
            }); 

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setData(result);
            console.log(result)
            setQuote(result[0]["quote"])
            setAuthor(result[0]["author"])

          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchData();
      }, [setData, setQuote, setAuthor, setError]);


      return (
        <div>
          {error && <p>Error: {error}</p>}
    
          {data && (
            <div>
              <Text as='i' fontSize='25px'>{quote}</Text>
              <br/>
              <Text as='b' fontSize='25px'>- {author}</Text>
            </div>
          )}
        </div>
      );
}
export default Quote
