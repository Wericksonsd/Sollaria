import Header from '../Header/Header.jsx'
import Main from '../Main/Historia.jsx'
import { Box } from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <Box h='100%' w='100%'>
      <Header/>
      <Main/>
    </Box>
  )
}

export default App
