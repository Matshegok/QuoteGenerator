import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

function RefreshButtons() {
    return (
      <>
        <ButtonGroup gap='3'>
          <Button colorScheme='green' size='lg'>Success</Button>
          <Button colorScheme='blue' size='lg'>Attitude</Button>
          <Button colorScheme='orange' size='lg'>Failure</Button>
          <Button colorScheme='red' size='lg'>Inspirational</Button>
        </ButtonGroup>
      </>
    )
  }
  export default RefreshButtons