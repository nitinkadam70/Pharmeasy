import React from 'react'
import { Box, Flex, Heading, Image, Text, Input, Center, Spacer, Stack, Spinner, Button } from '@chakra-ui/react'
import { IoIosArrowDown, IoIosArrowForward, IoMdCall } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import styles from '../Styles/navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
const Cart = () => {
    return (
        <Box width='80%' margin='auto' >
            <br />

            <Heading fontSize='26px' color='#4f585e' fontWeight='700' marginBottom='20px'>Cart</Heading>
            <Flex justifyContent='space-between' flexWrap='wrap'>
                <Box>
                    <Box p='30px 20px 20px' bg='#10847e' borderRadius='6px' >
                        <Flex>
                            <Flex alignItems='center' paddingRight='30px'>
                                <Image w='15px' h='15px' src='https://pharmeasy.in/_next/image?url=%2Ficons%2FvaluePropDisc.svg&w=16&q=75' />
                                <Text fontSize='12px' fontWeight='400' color='#fff' paddingLeft='10px'>Flat 15% Off</Text>
                            </Flex>
                            <Flex alignItems='center' paddingRight='30px'>
                                <Image w='15px' h='15px' src='https://pharmeasy.in/_next/image?url=%2Ficons%2FvaluePropProd.svg&w=16&q=75' />
                                <Text fontSize='12px' fontWeight='400' color='#fff' paddingLeft='10px'>1 Lakh+ Products</Text>
                            </Flex>
                            <Flex alignItems='center' paddingRight='30px'>
                                <Image w='15px' h='15px' src='https://pharmeasy.in/_next/image?url=%2Ficons%2FvaluePropProd.svg&w=16&q=75' />
                                <Text fontSize='12px' fontWeight='400' color='#fff' paddingLeft='10px'>Easy Returns</Text>
                            </Flex>
                        </Flex>
                        <br />
                        <Heading paddingLeft='2px' marginBottom='15px' fontSize='16px' color="#fff" fontWeight='700'>Search for Medicines / Healthcare Products</Heading>
                        <div className={styles.InputBox} style={{ width: '592px' }}>
                            <div className={styles.options}>
                                <select className={styles.select}>
                                    <option style={{ color: "teal" }} value="">Select Pincode</option>
                                    <option value="">Parbhani-MH-431401</option>
                                    <option value="">Pune-431402</option>
                                    <option value="">Mumbai-431403</option>
                                    <option value="">Bangluru-431404</option>
                                </select>
                            </div>
                            <div className={styles.inputDiv}>
                                <Input variant='unstyled' className={styles.input} type="text" placeholder='Search medicines/Healthcare products' />
                            </div>

                            <div >

                                <div>
                                    <Flex justifyContent='end'>
                                        <IconButton aria-label='Search database' icon={<SearchIcon />} />
                                    </Flex>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>

                <Box>


                    <Box w='420px' p='15px 30px' borderRadius='6px'>
                        <Flex gap='2%'>
                            <Heading fontSize='26px' fontWeight='700' color='#8897a2' > Your Cart is Empty</Heading>
                            <Image paddingRight='5px' w='157px' h='178px' src="https://assets.pharmeasy.in/web-assets/dist/bb14593e.svg" alt="" />
                            <Spacer />
                            <IoIosArrowDown />
                        </Flex>

                    </Box>
                </Box>
            </Flex>
        </Box>

    )
}

export default Cart