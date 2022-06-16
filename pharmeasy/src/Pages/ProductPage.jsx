import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, Heading, MenuItemOption, MenuOptionGroup, Select, SkeletonCircle, SkeletonText, Spacer, Stack, Text, } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import FilterData from '../Components/FilterData'
import ProductCard from '../Components/ProductCard'
import { getAllProducts } from '../Redux/AllProducts/action'

const ProductPage = () => {
    const dispatch = useDispatch()
    const allProduct = useSelector((store) => store.allProduct)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return (
        <Box >
            <br />
            <Flex gap='1%'>
                <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>Home </Text>
                <IoIosArrowForward style={{ width: "12px", color: "#8897a2" }} />
                <Text color='#4f85e' fontSize='12px' lineHeight='1.5'>All Categories</Text>
                <IoIosArrowForward style={{ width: "12px", color: "#8897a2" }} />
                <Text color='#8897a2' fontSize='12px' lineHeight='1.5'>  Health Food and Drinks</Text>
            </Flex>
            <br />
            <br />
            <Box>
                <Stack display={{ md: 'flex' }} flexDirection={{ md: 'row' }}>

                    <Box><FilterData /></Box>
                    <Box>
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Heading as='h3'>Health Food and Drinks</Heading>
                            <Flex alignItems='center'>
                                <Text marginRight='20px'>Sort by : </Text>
                                <Select w='200px'>
                                    <option>Popularity</option>
                                </Select>
                            </Flex>
                        </Flex>
                        <br />
                        <br />
                        <br />
                        {allProduct.loading ? <Box padding='6' boxShadow='lg' bg='white'>
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={4} spacing='4' />
                        </Box> : allProduct.error ?
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>Error ! </AlertTitle>
                                <AlertDescription>Something went wrong</AlertDescription>
                            </Alert> :

                            <Flex flexWrap='wrap' justifyContent='space-around'>
                                {allProduct.data.map(product => {
                                    return <ProductCard key={Math.random() * 100} {...product} />
                                })}
                            </Flex>
                        }
                    </Box>
                </Stack>
            </Box>

        </Box>
    )
}
export default ProductPage