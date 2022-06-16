import {
    Box, Text, Checkbox, CheckboxGroup, VStack, Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Radio
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAllProducts } from '../Redux/AllProducts/action'

const FilterData = () => {
    
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const [categoryValues, setCategoryValues] = useState(
        searchParams.getAll("Category") || []
    )


    const categoryHandler = (values) => {
        console.log(values);
        setCategoryValues(values)
    }

    useEffect(() => {
        if (categoryValues) {
            setSearchParams({ Category: categoryValues }, { replace: true })
        let params = {
            Category:searchParams.getAll('Category')
        }
        dispatch(getAllProducts(params))
        }
    }, [categoryValues, setSearchParams,searchParams])
    return (

        <Box w='300px' p='1rem 2rem' display={{ base: 'none', md: 'block' }}>
            <Text fontSize='2xl'>Filters</Text>
            <Text margin='5% 0%'>Category</Text>
            <Radio margin='5% 0%' defaultChecked >Health Food and Drinks</Radio>
            <hr />
            <br />

            <CheckboxGroup
                defaultValue={categoryValues}
                onChange={categoryHandler}
                colorScheme='green'
            >
                <VStack alignItems={'baseline'}>
                    <Checkbox value="Drinks">Drinks</Checkbox>
                    <Checkbox value="Protein">Protein</Checkbox>
                    <Checkbox value='Ayurvedic'>Ayurvedic</Checkbox>
                    <Checkbox value='Capsule'>Capsule</Checkbox>
                    <Checkbox value='Creams'>Creams</Checkbox>
                    <Checkbox value='Gel'>Gel</Checkbox>
                    <Checkbox value='Baby Product'>Baby Product</Checkbox>
                    <Checkbox value='device'>device</Checkbox>
                </VStack>
            </CheckboxGroup>
        </Box>


    )
}

export default FilterData