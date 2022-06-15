import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Offers = () => {
    return (

        <Box width='80%' margin='auto'>
            <br />
            <Flex gap='1%'>
                <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>Home </Text>
                <IoIosArrowForward style={{ width: "12px", color: '#8897a2' }} />
                <Text color='#8897a2' fontSize='12px' lineHeight='1.5'>  PharmEasy Coupon Codes & Offers
                </Text>
            </Flex>
            <br />
            <Box>
                <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                    PharmEasy Offers & Coupon Codes
                </Heading>
                <br />
                <Text color='#8897a2' marginBottom='5px'>
                    PharmEasy is one of India’s leading online healthcare platforms that allows you to make great savings on your medicines and healthcare needs every day.From finding the prescribed medicine you need to the wellness product that is best suitable for you...
                </Text>
                <br />
                <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                    Download the PharmEasy app today to buy medicines online with great savings.


                </Heading>
                <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                    Hurry! Avail these exclusive PharmEasy offers now.


                </Heading>
            </Box>

            <div className={styles.grid}>

            </div>
        </Box>
    )
}


export default Offers