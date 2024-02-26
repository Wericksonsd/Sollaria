import React, {useState, useEffect} from 'react'
//import styles from "./Header.module.css";

import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function Header () {

    const boxStatic = {
        bg: 'transparent',
        py: 3,
        px: 5,
    }

    const boxHover = {
        bg: 'gray.700',   
    }

    return(
        <Flex as='header' w='100%' h='250px' bg='gray.800' color='whitesmoke' align="center" direction='column'>
            <Flex flex='1' align='center' justify='center'> 
                <Text fontSize='6rem'>TITULO</Text>
            </Flex>
            <Grid h='50px' w='100%' templateColumns='repeat(4, 1fr)'>
                <Box as='button' sx={boxStatic} _hover={boxHover}>História</Box>
                <Box as='button' sx={boxStatic} _hover={boxHover}>Produtos</Box>
                <Box as='button' sx={boxStatic} _hover={boxHover}>Franquias</Box>
                <Box as='button' sx={boxStatic} _hover={boxHover}>Seja um franqueado</Box>
            </Grid>
        </Flex>
    )

}

export default Header