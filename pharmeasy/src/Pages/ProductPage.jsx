import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Grid,
  Heading,
  MenuItemOption,
  MenuOptionGroup,
  Select,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import FilterData from '../Components/FilterData';
import ProductCard from '../Components/ProductCard';
import SortingHeader from '../Components/SortingHeader';
import { getAllProducts } from '../Redux/AllProducts/action';

const ProductPage = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((store) => store.allProduct);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <Box>
      <br />
      <Flex gap="1%">
        <Text color="#4f85e" fontSize="12px" lineHeight="1.5">
          Home{' '}
        </Text>
        <IoIosArrowForward
          style={{ width: '12px', color: '#8897a2' }}
        />
        <Text color="#4f85e" fontSize="12px" lineHeight="1.5">
          All Categories
        </Text>
        <IoIosArrowForward
          style={{ width: '12px', color: '#8897a2' }}
        />
        <Text color="#8897a2" fontSize="12px" lineHeight="1.5">
          {' '}
          Health Food and Drinks
        </Text>
      </Flex>
      <br />
      <br />
      <Box>
        <Stack display={{ md: 'flex' }} flexDirection={{ md: 'row' }}>
          <Box>
            <FilterData />
          </Box>
          <Box>
            <SortingHeader />
            <br />
            <br />
            <br />
            {allProduct.loading ? (
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ) : allProduct.error ? (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Error ! </AlertTitle>
                <AlertDescription>
                  Something went wrong
                </AlertDescription>
              </Alert>
            ) : (
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(1, 1fr)',
                  lg: 'repeat(3, 1fr)',
                }}
                gap={8}
              >
                {allProduct.data.map((product) => {
                  return (
                    <ProductCard
                      key={Math.random() * 100}
                      {...product}
                    />
                  );
                })}
              </Grid>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default ProductPage;
