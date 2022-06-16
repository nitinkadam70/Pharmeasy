import { Box, Flex, Heading, Menu, MenuItemOption, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../Redux/AllProducts/action'
const SortingHeader = () => {

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedValues, setSelectedValues] = useState()


    useEffect(() => {
        if (selectedValues) {
            setSearchParams({ _sort: "mrp", _order: selectedValues }, { replace: true })
            let params = {
                _sort: "mrp",
                _order: selectedValues
            }
            dispatch(getAllProducts(params))
        }
    }, [selectedValues, setSearchParams, searchParams])
    console.log(selectedValues)
    return (
        <div>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading as='h3'>Health Food and Drinks</Heading>
                <Flex alignItems='center'>
                    <Text marginRight='20px'>Sort by : </Text>
                    <Box>
                        <Select onChange={(e) => setSelectedValues(e.target.value)}>
                            <option value=''>Popularity</option>
                            <option value='ASC'>Price low to high</option>
                            <option value='DESC'>Price high to low</option>
                            <option value=''>Discount</option>
                        </Select>
                    </Box>

                </Flex>
            </Flex>
        </div>
    )
}

export default SortingHeader