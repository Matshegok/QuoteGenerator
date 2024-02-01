import React from 'react'; 
import { Heading } from '@chakra-ui/react'; 
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react'

function ThemeComp(){

    //state variables that will hold the quote data upon API get request
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [quote, setQuote] = useState(null); 
    const [author, setAuthor] = useState(null); 

    //api key
    const api = import.meta.env.VITE_API_KEY

    //function to fetch the data from the API
    const fetchData = async () => {
        try {
            const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=happiness`; //I will change the API theme after this 
        
            //http get request 
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                'X-API-Key': api,
                'Content-Type':'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            //Turning result into a JSON 
            const result = await response.json();

            //setting the state variables to the result 
            setData(result);
            setQuote(result[0]["quote"]); 
            setAuthor(result[0]["author"]); 
            console.log(quote); 
            console.log(author); 
        }
        
        catch (err) {
            setError(err.message);
        }
    }


    return (
        <>
            <Heading as='h2' size='xl'>Choose your quote theme below</Heading>

            <ButtonGroup gap='3'>
              <Button colorScheme='green' size='lg' onClick={fetchData}>Success</Button>
              <Button colorScheme='blue' size='lg' onClick={fetchData}>Attitude</Button>
              <Button colorScheme='red' size='lg' onClick={fetchData}>Love</Button>
              <Button colorScheme='yellow' size='lg' onClick={fetchData}>Life</Button>
            </ButtonGroup>
        </> 
    )

}

export default ThemeComp