import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const ProductPage = () => {
    return (
        <Box width='80%' margin='auto' >
            <br />
            <Flex gap='1%'>
                <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>Home </Text>
                <IoIosArrowForward style={{ width: "12px", color: "#8897a2" }} />
                <Text color='#8897a2' fontSize='12px' lineHeight='1.5'>  Order Medicines Online</Text>
            </Flex>
            <br />
        </Box>
    )
}
export default ProductPage