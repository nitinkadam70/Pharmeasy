import React from 'react'
import Slideshow from '../Components/SlideShowHomepage'
import { Box, Flex, Heading, Image, Img, Spacer, HStack, Center, Stack, Spinner, Text } from '@chakra-ui/react'
import SliderSmall from '../Components/SliderSmall'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOffers } from '../Redux/Offeres/action'
import { useNavigate } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import LabtestSlider from '../Components/LabtestSlider'
import { getLabtest } from '../Redux/Labtest/action'
import ProductSlider from '../Components/ProductSlider'
import { Heddline } from '../Components/Styled'

const miniFooter = [
    {
        img: "https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg",
        hedd: "25 Million",
        para: "Registered Users as of Jun 30, 2021"
    },
    {
        img: "https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg",
        hedd: "8.8 Million",
        para: "PharmEasy Orders as of FY21"
    },
    {
        img: "https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
        hedd: "50K+",
        para: "SKUs sold in Q1FY22"
    },
    {
        img: "https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg",
        hedd: "18K+",
        para: "Pin-Codes Serviced for the month of June 2021"
    }

]

const Homepage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((store) => store.offers)
    const labTest = useSelector((store) => store.labTest)


    useEffect(() => {
        dispatch(getOffers())
        dispatch(getLabtest())
    }, [dispatch])


    return (
        <div>
            <Slideshow />
            <br />
            <Flex >
                <Box bg='white' p='4' w='100%' onClick={() => navigate("/orderMedicines")} >
                    <Image maxW='100%' src="https://i.imgur.com/0uRtxpG.png" />
                </Box>
                <Spacer />
                <Box p='4' w='100%' onClick={() => navigate("/healthcareProducts")}>
                    <Image maxW='100%' src='https://i.imgur.com/ZUWscdt.png' />
                </Box>
                <Spacer />
                <Box p='4' w='100%' onClick={() => navigate("/labtests")}>
                    <Image maxW='100%' src='https://i.imgur.com/Q8N2YZt.png' />
                </Box>
            </Flex>
            <br />
            <Box w='100%'>
                <Img maxW='100%' src='https://i.imgur.com/JJecxvy.png
'/>
            </Box>
            <br />
            <Box>
                <Flex alignItems='center'>
                    <Flex alignItems='center'>
                        <Img w='35px' h='35px' marginRight='15px' src='https://assets.pharmeasy.in/web-assets/dist/67890676.svg' />
                        <Heading color='#4f585e' fontSize='20px' fontWeight='700' lineHeight='1.5'>Offers Just For You</Heading>
                    </Flex>
                    <Spacer />
                    <Flex alignItems='center' gap='1rem'>
                        <Heading cursor='pointer' fontSize='18px' fontWeight='600' color="#10847e" onClick={() => navigate("/offers")}>See All Offers</Heading>
                        <BsFillArrowRightCircleFill />
                    </Flex>
                </Flex>
            </Box>
            {
                loading ?
                    <Center><Stack direction='row' spacing={4}>
                        <Spinner size='xl' />
                    </Stack>
                    </Center>

                    : error ? 'error' :
                        <SliderSmall data={data} />
            }

            <br />

            <Box>
                <Heading bg='#d4e2fa' p='1rem' color='#4f585e' fontSize='20px' fontWeight='700' lineHeight='1.5'>Frequently Booked Lab Tests</Heading>
            </Box>
            <Box bg="#d4e2fa">
                {
                    labTest.loading ? <Center><Stack direction='row' spacing={4}>
                        <Spinner size='xl' />
                    </Stack>
                    </Center> : labTest.error ? "error" :
                        <LabtestSlider data={labTest.data} />
                }
            </Box>
            <br />
            <Box>
                <Heading p='1rem' color='#4f585e' fontSize='20px' fontWeight='700' lineHeight='1.5'>Featured Brands</Heading>
            </Box>
            <Box>
                <ProductSlider />
            </Box>
            <br />
            <br />
            <Box>
                <Flex alignItems='center' justifyContent='space-between'>
                    {
                        miniFooter.map((item) => (
                            <>
                                <Box w='324px' h='251px' color='#4f585e'>
                                    <Img src={item.img} />
                                    <Heading fontSize='42px' fontWeight='700' marginTop='30px' marginBottom='10px'>{item.hedd}</Heading>
                                    <Text fontSize='18px' fontWeight='600' >{item.para}</Text>
                                </Box>
                            </>
                        ))
                    }
                </Flex>
                <br />
                <Image src='https://i.imgur.com/vGHEcqc.png' />
            </Box>


        </div >
    )
}

export default Homepage