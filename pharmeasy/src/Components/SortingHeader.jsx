import { Box, Flex, Heading, Menu, MenuItemOption, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const SortingHeader = () => {

    const [selectedValues, setSelectedValues] = useState([])
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const [categoryValues, setCategoryValues] = useState(
        searchParams.getAll("Category") || []
    )
    console.log(selectedValues)
    return (
        <div>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading as='h3'>Health Food and Drinks</Heading>
                <Flex alignItems='center'>
                    <Text marginRight='20px'>Sort by : </Text>
                    <Box>
                        <Select onChange={(e) => setSelectedValues(e.target.value)}>
                            <option>Popularity</option>
                            <option value='asc'>Price low to high</option>
                            <option value='desc'>Price high to low</option>
                            <option value='desc'>Discount</option>
                        </Select>
                    </Box>

                </Flex>
            </Flex>
        </div>
    )
}

export default SortingHeader