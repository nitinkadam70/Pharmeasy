import React, { useEffect } from 'react'
import { Box, Flex, Heading, Image, Text, Input, Center, Spacer, Stack, Spinner, Button } from '@chakra-ui/react'
import { IoIosArrowDown, IoIosArrowForward, IoMdCall } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import styles from '../Styles/navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getOffers } from '../Redux/Offeres/action';
import SliderSmall from '../Components/SliderSmall';
import SlideShowOrederPage from '../Components/SlideShowOrederPage';
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const OrderMedicinesImages = [
    "https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg"
]
const OrderMedicines = () => {


    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((store) => store.offers)

    useEffect(() => {
        dispatch(getOffers())
    }, [dispatch])
    return (
        <Box width='80%' margin='auto' >
            <br />
            <Flex gap='1%'>
                <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>Home </Text>
                <IoIosArrowForward style={{ width: "12px", color: "#8897a2" }} />
                <Text color='#8897a2' fontSize='12px' lineHeight='1.5'>  Order Medicines Online</Text>
            </Flex>
            <br />
            <Heading fontSize='26px' color='#4f585e' fontWeight='700' marginBottom='20px'>Order Medicines Online</Heading>
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
                    <Flex alignItems='center' w='352px' border='1px solid #4f585e' p='15px 30px' borderRadius='6px'>
                        <Image paddingRight='5px' w='32px' h='32px' src="https://static1.squarespace.com/static/570d83a355598634587821aa/t/57337f63c2ea51ad0fa05508/1462992752843/icon_prioritize.png" alt="" />
                        <Heading fontSize='16px' fontWeight='600' color='#4f585e' > Order Via Prescription</Heading>
                        <Spacer />
                        <IoIosArrowForward />
                    </Flex>
                    <br />

                    <Box w='352px' border='1px solid #4f585e' p='15px 30px' borderRadius='6px'>
                        <Flex >
                            <Image paddingRight='5px' w='40px' h='22px' src="https://th.bing.com/th/id/OIP.Ti4BbWThlntt0eHnkEXEQAHaEc?w=274&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                            <Heading fontSize='16px' fontWeight='600' color='#4f585e' > Dont have a Prescription ? </Heading>
                            <Spacer />
                            <IoIosArrowDown />
                        </Flex>

                        <Box p='2% 0% 0% 20%' fontSize='12px' color='#4f585e'>
                            <ul style={{ paddingBottom: "10px" }}>
                                <li >Add medicines to your cart</li>
                                <li>Select Free Docter Consultation at Checkout</li>
                            </ul>
                        </Box>
                        <Flex color='white' alignItems='center' bg='teal' p='10px 16px' borderRadius='6px'>
                            <button bg='teal'>
                                Or call on +91 99929 99929
                            </button >
                            <Spacer />
                            <IoMdCall style={{ width: '30px', height: '30px' }} />
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <br />
            <Heading color='#4f585e' fontSize='20px' fontWeight='700' lineHeight='1.5'>All Offers</Heading>
            <br />
            {
                loading ?
                    <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                    </Stack>

                    : error ? 'error' :
                        <SliderSmall data={data} />
            }

            <br />
            <SlideShowOrederPage data={OrderMedicinesImages} />
            <br />
            <br />
            <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>India's No.1 Medicine Delivery App</Heading>
            <br />
            <Text color='#8897a2' marginBottom='5px'>The concept of medicine home delivery has been taken to a new level by the PharmEasy online medicine delivery app. You can use the PharmEasy online medicine delivery app to browse through an extensive range of medicines. Each medicine undergoes a 3-step quality check.</Text>
            <Text color='#8897a2' marginBottom='5px'>Whatever be your medicinal requirement, you are sure to locate it in this online pharmacy. All you have to do then is to add it to your cart and place the order. In 3 hours*, the medicines will be delivered to you. India’s beloved online medicine delivery app makes sure that you get your medicines in record time because we know how vital time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.</Text>
            <br />
            <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>Online Medicine - Your Online Medical Store in India</Heading>
            <br />
            <Text color='#8897a2' marginBottom='5px'>
                Tired of walking all the way to your local medicine store? Worried that going out is risky during the current times? Order medicines online at PharmEasy, India’s trusted online medicine app. With more than 1 lakh medicines always in stock, you are sure to find what you are looking for, and that too at affordable prices!
            </Text>
            <Text color='#8897a2' marginBottom='5px'>
                Besides, extremely stringent sanitization norms are followed at your favourite online medical store. PharmEasy takes the safety of customers and employees very seriously.
            </Text>
            <br />
            <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>Reasons To Buy Medicine Online From PharmEasy</Heading>
            <br />
            <Text color='#8897a2' marginBottom='5px'>Here are a few reasons that will convince you to give online medicine order through the PharmEasy app -</Text>
            <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                <ul>
                    <li>
                        1,200+ cities and 20,000+ Pin codes served
                    </li>
                    <li>Medicine delivery within 3 hours*</li>
                    <li>1 Lakh+ medicines availabl</li>
                    <li>Cash on delivery option available</li>
                    <li>Attractive offers</li>
                    <li>Cashback option through wallet</li>
                    <li>Stringent quality checks</li>
                    <li>Garnered the trust of more than 10 million users who have made an online purchase through PharmEasy</li>
                </ul>
            </Text>
            <br />
            <Heading color='#4f585e' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>Get 3-Step Quality-checked Medicines
            </Heading>
            <br />
            <Text color='#8897a2' marginBottom='5px'>PharmEasy is a one-stop-shop for all your healthcare needs. We have 1L+ products for you to choose from. Buy medicines online at affordable prices from the comforts of your home in just a few clicks and get them delivered at your doorstep.</Text>
            <Text color='#8897a2' marginBottom='5px'>The entire process of shopping for medicines is hassle-free and convenient. All you have to do is search for the products you need on our website or app, add to cart and then proceed with the checkout process.</Text>
            <Text color='#8897a2' marginBottom='5px'>With our scheduled refill reminder, you don’t even need to keep track of your refill dates.
                What’s more, we have great offers, with added discounts and massive e-wallet cashbacks on purchasing medicines!</Text>
        </Box>

    )
}

export default OrderMedicines