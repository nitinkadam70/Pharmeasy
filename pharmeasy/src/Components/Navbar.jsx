import React from 'react'
import styles from '../Styles/navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { Box, Center, Flex, Input, Stack } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import LoginSignup from '../Pages/LoginSignup';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'
const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.Logo}>
                    <Link to="/">
                        <img className={styles.logoImg} src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png' alt='logo' />
                    </Link>
                </div>
                <div className={styles.InputBox}>
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

                    <div>
                        <Flex justifyContent='end'>
                            <IconButton minH='3rem' aria-label='Search database' icon={<SearchIcon/>} />
                        </Flex>
                    </div>
                </div>

                <Menu >
                    <MenuButton
                        className={styles.menu}
                        display='none'
                        bg='white'
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList >
                        <Stack>
                            <NavLink to='/orderMedicines'>Order Medicines</NavLink>
                            <NavLink to='/healthcareProducts'>Healthcare Products</NavLink>
                            <NavLink to='/labtests'>Lab Tests</NavLink>
                            <NavLink to='/offers'>Offers</NavLink>
                            <NavLink to='/cart'>Cart</NavLink>
                            <LoginSignup />
                        </Stack>



                    </MenuList>
                </Menu>

            </div>

            <div className={styles.linksNavbar}>
                <div className={styles.links}>

                    <div>
                        <NavLink className={styles.NavLink} to='/orderMedicines'>Order Medicines</NavLink>
                    </div>

                    <div>
                        <NavLink className={styles.NavLink} to='/healthcareProducts'>Healthcare Products</NavLink>
                    </div>
                    <div>
                        <NavLink className={styles.NavLink} to='/labtests'>Lab Tests</NavLink>
                    </div>
                    <div>
                        <NavLink className={styles.NavLink} to='/ProductPage'>Products</NavLink>
                    </div>

                </div>
                <div className={styles.links}>
                    <div className={styles.icon}>
                        <img style={{ width: "24px", height: "24px", marginLeft: "14px" }} src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="" />
                        <NavLink className={styles.secondLink} to='/offers'>Offers</NavLink>
                    </div>
                    <div className={styles.icon}>
                        <img style={{ width: "24px", height: "24px", marginLeft: "14px" }} src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="" />
                        <LoginSignup />
                    </div>
                    <div className={styles.icon}>
                        <img style={{ width: "24px", height: "24px", marginLeft: "14px" }} src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="" />
                        <NavLink className={styles.secondLink} to='/cart'>Cart</NavLink>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Navbar