import React from 'react';
import { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


function Quote({quote, author, error}){
      return (
        <div>
          {error && <p>Error: {error}</p>}
    
          {quote && (
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
