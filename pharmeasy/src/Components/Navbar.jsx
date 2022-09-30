import React from 'react';
import styles from '../Styles/navbar.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Center,
  Flex,
  Img,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import LoginSignup from '../Pages/LoginSignup';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Redux/AllProducts/action';
const Navbar = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const allProduct = useSelector((store) => store.allProduct);
  const navigate = useNavigate();
  async function searchProducts() {
    let params = {
      q: searchText,
    };
    dispatch(getAllProducts(params));
    return allProduct.data;
  }

  async function main() {
    let data = await searchProducts();

    if (data === undefined) {
      return false;
    }

    setData(data.splice(0, 5));
  }

  let timerid;
  function debounce(func, delay) {
    if (timerid) {
      clearTimeout(timerid); //almost similar to like innerHTML.null
    }
    timerid = setTimeout(function () {
      func(); // these is main function we r only change name here
    }, delay);
  }

  useEffect(() => {
    if (searchText?.length > 0) {
      debounce(main, 1000);
    }
  }, [searchText?.length, searchText]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.Logo}>
          <Link to="/">
            <img
              className={styles.logoImg}
              src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className={styles.InputBox}>
          <div className={styles.options}>
            <select className={styles.select}>
              <option style={{ color: 'teal' }} value="">
                Select Pincode
              </option>
              <option value="">Parbhani-MH-431401</option>
              <option value="">Pune-431402</option>
              <option value="">Mumbai-431403</option>
              <option value="">Bangluru-431404</option>
            </select>
          </div>
          <div className={styles.inputDiv}>
            <Input
              onChange={(e) => setSearchText(e.target.value)}
              variant="unstyled"
              className={styles.input}
              type="search"
              placeholder="Search medicines/Healthcare products"
            />

            {data?.length > 0 && searchText?.length > 0 ? (
              <Box
                bg={'white'}
                padding="2%"
                box-shadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                width={'49%'}
                position="absolute"
                zIndex={1}
                top={'1.8%'}
              >
                {data.map((elem) => (
                  <Flex
                    gap={4}
                    marginTop={2}
                    key={elem.id}
                    _hover={{ color: 'green' }}
                    cursor="pointer"
                    onClick={() => navigate('/ProductPage')}
                  >
                    <Img
                      height={'22px'}
                      width={'22px'}
                      src={elem.srcSet}
                      alt="img"
                    />
                    <Text>{elem.alt}</Text>
                  </Flex>
                ))}
              </Box>
            ) : null}
          </div>

          <div>
            <Flex justifyContent="end">
              <IconButton
                minH="3rem"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </Flex>
          </div>
        </div>

        <Menu>
          <MenuButton
            className={styles.menu}
            display="none"
            bg="white"
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <Stack>
              <NavLink to="/orderMedicines">Order Medicines</NavLink>
              <NavLink to="/healthcareProducts">
                Healthcare Products
              </NavLink>
              <NavLink to="/labtests">Lab Tests</NavLink>
              <NavLink to="/offers">Offers</NavLink>
              <NavLink to="/cart">Cart</NavLink>
              <LoginSignup />
            </Stack>
          </MenuList>
        </Menu>
      </div>

      <div className={styles.linksNavbar}>
        <div className={styles.links}>
          <div>
            <NavLink className={styles.NavLink} to="/orderMedicines">
              Order Medicines
            </NavLink>
          </div>

          <div>
            <NavLink
              className={styles.NavLink}
              to="/healthcareProducts"
            >
              Healthcare Products
            </NavLink>
          </div>
          <div>
            <NavLink className={styles.NavLink} to="/labtests">
              Lab Tests
            </NavLink>
          </div>
          <div>
            <NavLink className={styles.NavLink} to="/ProductPage">
              Products
            </NavLink>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.icon}>
            <img
              style={{
                width: '24px',
                height: '24px',
                marginLeft: '14px',
              }}
              src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg"
              alt=""
            />
            <NavLink className={styles.secondLink} to="/offers">
              Offers
            </NavLink>
          </div>
          <div className={styles.icon}>
            <img
              style={{
                width: '24px',
                height: '24px',
                marginLeft: '14px',
              }}
              src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg"
              alt=""
            />
            <LoginSignup />
          </div>
          <div className={styles.icon}>
            <img
              style={{
                width: '24px',
                height: '24px',
                marginLeft: '14px',
              }}
              src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg"
              alt=""
            />
            <NavLink className={styles.secondLink} to="/cart">
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
