import { Text, Flex, Box, Img, Center, Stack, Spinner, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import LabtestSlider from '../Components/LabtestSlider'
import SlideShowOrederPage from '../Components/SlideShowOrederPage'
import { getLabtest } from '../Redux/Labtest/action'

const labTestData = [
    "https://cms-contents.pharmeasy.in/banner/e63e0d8aa74-Master-Check-up_GRAND1200.jpg",
    "https://cms-contents.pharmeasy.in/banner/e63e0d8aa74-Master-Check-up_GRAND1200.jpg",
    "https://cms-contents.pharmeasy.in/banner/e63e0d8aa74-Master-Check-up_GRAND1200.jpg",
    "https://cms-contents.pharmeasy.in/banner/e63e0d8aa74-Master-Check-up_GRAND1200.jpg"
]

const LabTests = () => {
    const dispatch = useDispatch();
    const labTest = useSelector((store) => store.labTest)

    useEffect(() => {
        dispatch(getLabtest())
    }, [dispatch])

    return (
        <Box width='80%' margin='auto'>
            <br />
            <Flex gap='1%'>
                <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>Home </Text>
                <IoIosArrowForward style={{ width: "12px", color: '#8897a2' }} />
                <Text color='#8897a2' fontSize='12px' lineHeight='1.5'>  LabTest</Text>
            </Flex>
            <br />
            <br />
            <SlideShowOrederPage data={labTestData} />
            <br />
            <br />
            <Flex justifyContent='space-around'   >
                <Flex alignItems='center' border='1px solid black' p='2% 5%' borderRadius='full'>
                    <Img
                        src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                        alt="All Tests"
                    />
                    All Tests
                </Flex>

                <Flex alignItems='center' border='1px solid black' p='2% 5%' borderRadius='full'>
                    <Img
                        src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
                        alt="Health Packages"
                    />
                    Health Packages
                </Flex>
                <Flex alignItems='center' border='1px solid black' p='2% 5%' borderRadius='full'>
                    <Img
                        src="https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg"
                        alt="Upload Prescription"
                    />
                    Upload Prescription
                </Flex>
                <Flex alignItems='center' border='1px solid black' p='2% 5%' borderRadius='full'>
                    <Img
                        src="https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg"
                        alt="Book on Call"
                    />
                    Book on Call
                </Flex>
            </Flex>
            <br />
            <Box>
                <Img src='https://i.imgur.com/pnAoC2L.png' />
            </Box>
            <br />
            <Heading>Recently Searched By You</Heading>
            <br />
            <Box>
                {
                    labTest.loading ? <Center><Stack direction='row' spacing={4}>
                        <Spinner size='xl' />
                    </Stack>
                    </Center> : labTest.error ? "error" :
                        <LabtestSlider data={labTest.data} />
                }

            </Box>
        </Box>
    )
}

export default LabTests