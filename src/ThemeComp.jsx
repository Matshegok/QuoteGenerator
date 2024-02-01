import React from 'react'; 
import { Heading } from '@chakra-ui/react'; 
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react'

function ThemeComp({setData, setError, setQuote, setAuthor, setUrl}){


    //api key
    const api = import.meta.env.VITE_API_KEY

    //function to fetch the data from the API
    const fetchData = async (theme) => {
        try {
            const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${theme}`; //I will change the API theme after this 
            setUrl(apiUrl)
        
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
        }
        
        catch (err) {
            setError(err.message);
        }
    }


    return (
        <>
            <Heading as='h2' size='xl'>Choose your quote theme below</Heading>

            <ButtonGroup gap='3'>
              <Button colorScheme='green' size='lg' onClick={()=>{fetchData("success")}}>Success</Button>
              <Button colorScheme='blue' size='lg' onClick={()=> {fetchData("attitude")}}>Attitude</Button>
              <Button colorScheme='red' size='lg' onClick={()=>{fetchData("love")}}>Love</Button>
              <Button colorScheme='yellow' size='lg' onClick={()=>{fetchData("life")}}>Life</Button>
            </ButtonGroup>
        </> 
    )

}

export default ThemeComp