import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

function ButtonComponent() {

  function refreshPage(){
    window.location.reload(false)
  }
    return (
      <>
        <Button colorScheme='teal' size='lg' onClick={refreshPage}>Regenerate</Button>
      </>
    )
  }
  export default ButtonComponent