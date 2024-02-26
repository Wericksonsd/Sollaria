import { Flex } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function Main (){

    const imgBack = {
        bgSize: "cover",
        bgPosition: "center",
        bgRepeat: "no-repeat",
    }

    return (
        <Box >
            <Flex h='100%' align='center' direction='column' mt={150} p={7}>
                <Text fontSize='10rem'>
                    História
                </Text>
                <Text fontSize="1rem" align='justify'px={40}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore provident tenetur perspiciatis quae, voluptate, possimus harum nostrum autem sequi vero dolorem vel eum odit aliquam similique quam voluptates, nam dolore. Ad inventore corporis velit quia repudiandae veritatis error, neque quasi et, nihil praesentium asperiores necessitatibus iure quod nostrum facilis sint doloribus officia omnis placeat dolorem rerum! Iure nisi error voluptates aut ducimus qui asperiores. Repellendus omnis sint incidunt dolor perferendis aliquam corporis harum officia, dicta, illo debitis architecto placeat? Mollitia quae, sint tempore eaque odit possimus eos similique fugit commodi dolores itaque doloribus expedita corporis. Tenetur sapiente officia officiis odio sint maiores et, delectus quasi earum ipsa ab, consequatur ut quaerat dolorum dignissimos dolores adipisci cupiditate mollitia! Culpa iure adipisci reiciendis unde sapiente delectus nobis, laudantium nam animi rem magnam quam itaque iste ducimus! In nam quidem maxime ut, harum explicabo porro nihil quisquam! Temporibus dolorum aliquid voluptates velit?</Text>
            </Flex>
        </Box>
    )
}
export default Main