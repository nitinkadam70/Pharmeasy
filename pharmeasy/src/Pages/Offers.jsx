import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { getOffers } from '../Redux/Offeres/action'
import styles from '../Styles/navbar.module.css'
import { IconButton } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
const Offers = () => {

    const { loading, error, data } = useSelector((store) => store.offers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOffers())
    }, [dispatch])
    return (
        <>
            <Box width='80%' margin='auto' >
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

                <div className={styles.gridOffers}>
                    {
                        data.map((item) => (
                            <Box w='500px' h='191px' marginBottom='10%'>
                                <Flex gap='4%' h='180px' boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" p='5% 2%' borderRadius='6px' alignItems='center' >
                                    <Box w='62px'>
                                        <Image maxW='62px' src={item.img} />
                                    </Box>
                                    <Box>
                                        <Heading color='#4f585e' fontWeight='700' fontSize='18px'>{item.discount}</Heading>
                                        <Text color='#8897a2' fontWeight='700' fontSize='14px' lineHeight='1.5' marginBottom='5px'>
                                            {item.discount}
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex border='1px solid #4f585e' borderRadius='6px' p='2% 4%' boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset">
                                    <Text>Code : {item.Code}</Text>
                                    <Spacer />
                                    <Text color='#10847e' fontWeight='700'>Copy Code</Text>
                                </Flex>
                            </Box>
                        ))
                    }
                </div >

            </Box >
            <br />
            <br />
            <br />
            <br />

        </>
    )
}


export default Offers