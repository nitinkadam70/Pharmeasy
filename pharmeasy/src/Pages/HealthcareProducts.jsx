import { Box, Center, Flex, Grid, Heading, Img, Spacer, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import SlideShowOrederPage from '../Components/SlideShowOrederPage'
import { getProducts } from '../Redux/HelthcareProducts/action'
import styles from '../Styles/navbar.module.css'
import {  SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const sliderdata = [
    "https://cms-contents.pharmeasy.in/banner/b7f811b4430-Supradyn-NDD.jpg",
    "https://cms-contents.pharmeasy.in/banner/3ab35ad135a-Cremaffin-June-SRP.jpg",
    "https://cms-contents.pharmeasy.in/banner/26d88c347d7-Colgate-Diab.jpg",
    "https://cms-contents.pharmeasy.in/banner/975ea7c6c57-Roshi-CB.jpeg",
    "https://cms-contents.pharmeasy.in/banner/3c690a0e0f2-Luvlap-CB.jpg",
    "https://cms-contents.pharmeasy.in/banner/517210653be-Batiste-CB-June22.jpg",
    "https://cms-contents.pharmeasy.in/banner/627c570ceec-Plum-M-M.jpg",
    "https://cms-contents.pharmeasy.in/banner/3ab35ad135a-Cremaffin-June-SRP.jpg"
]
const HealthcareProducts = () => {

    const { loading, data, error } = useSelector((store) => store.healthCare);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    console.log(data)
    return (
        <>
            <Box width='80%' margin='auto'>
                <br />
                <Flex gap='1%'>
                    <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>Home </Text>
                    <IoIosArrowForward style={{ width: "12px", color: '#8897a2' }} />
                    <Text color='#8897a2' fontSize='12px' lineHeight='1.5'>  Healthcare</Text>
                </Flex>
                <br />
                <SlideShowOrederPage data={sliderdata} />
                <br />
                <br />
                <div className={styles.grid}>
                    {loading ?
                        <Box padding='6' boxShadow='lg' bg='white'>
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={4} spacing='4' />
                        </Box>

                        : error ? 'error' :
                            data.map((item) => (
                                <Flex className={styles.flex} key={item.img} borderRadius='6px' border='1px solid #dfe3e6' p='5%' alignItems='center'>
                                    <Img w='60px' h='60px' src={item.img} />
                                    <Text
                                        fontSize='16px'
                                        fontWeight='500'
                                        color='#4a4a4a'
                                        width='66%'
                                        verticalAlign='middle'
                                    >
                                        {item.title}</Text>
                                    <Text
                                        color='#16876e'
                                        fontSize='14px'
                                        textAlign='right'
                                        paddingRight='15px'
                                        verticalAlign='middle'
                                        w='34%'
                                    >
                                        {item.discount}</Text>
                                </Flex>
                            ))
                    }
                </div>
                <br />
                <br />
                <br />
                <br />
                <Box>
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Shop Safely And Worry-Free On PharmEasy
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px'>
                        PharmEasy is a renowned name in the online shopping of Over The Counter or healthcare products and other daily essentials. Ordering online on PharmEasy is convenient, fast and hassle-free; you can avoid the annoyance of queuing up at your local pharmacy and also avail of huge discounts of up to 80% OFF. Purchasing the healthcare requirements such as medical devices and nutritional supplements that you need will no longer burn a hole in your pocket. At PharmEasy, you are sure to find everything that you need because we have products across all healthcare categories.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>Why choose PharmEasy?</Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>

                        <ul>
                            <li>
                                8400+ Brands
                            </li>
                            <li>35K products in our stock</li>
                            <li>Delivery to 22000+ pin codes</li>
                            <li>Delivered to 50 lakh+ families</li>
                            <li>Over 2M customers served</li>
                        </ul>
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Our most popular categories:
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        We have a range of categories and products, some which are:
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Devices
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        With the pandemic upending our lives, we have all realized that there are some medical devices that we need to keep in our homes such as Oximeter, Thermometer, Inhaler, Blood pressure monitor, Glucometer.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Personal care
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        Personal care products can include a wide range of products such as Bath products, , Skincare essentials, Razor blades, Toothpaste and toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Nutrition and fitness supplements
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        To give your health a helping hand, you can order a wide variety of health supplements including Health drinks, Nutritional powder, Nutrition tablets/capsules.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Ayurvedic care
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        Place your trust in the goodness of natural and organic ayurvedic products for an all-around healthy mind and body. There’s plenty to choose from such as Aloe vera juice, Moringa capsules, Garlic capsules.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Home care

                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        Home care products are things you need every day such as disinfectant spray, phenyl, dishwashing liquid, etc. Get them all at spectacular discounts on PharmEasy.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Baby and mom care

                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        PharmEasy also has an impressive range of baby and mom care products including Diapers, Baby bath products, Infant formula food, Mother’s health drinks, Diaper rash creams, Baby wipes.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Our top brands:
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        Get products from the most famous and trusted brands including Accu-chek, Dettol, Horlicks, Baidyanath, Sebamed.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        You are safe with PharmEasy:
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        Given the times, we are taking all precautions to ensure that we keep everyone safe - our customers and the people we work with.
                    </Text>
                    <br />
                    <Heading color='#8897a2' marginBottom='5px' fontSize='20px' fontWeight='700' lineHeight='1.5'>
                        Youe safety is our priority
                    </Heading>
                    <Text color='#8897a2' marginBottom='5px' paddingLeft='2%'>
                        Stay safe at home and shop at your convenience from PharmEasy. All you have to do is place your order and we will try to deliver it at the earliest.
                    </Text>
                </Box>
            </Box>
            <br />
            <br />
        </>
    )
}

export default HealthcareProducts