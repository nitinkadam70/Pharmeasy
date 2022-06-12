import React from 'react'
import styles from '../Styles/navbar.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

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
                            <option value="">431401</option>
                            <option value="">431402</option>
                            <option value="">431403</option>
                            <option value="">431404</option>
                        </select>
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} type="text" placeholder='Search medicines/Healthcare products' />
                    </div>

                    <div className={styles.searchdiv}>
                        <AiOutlineSearch width='25px' height='25px' />
                    </div>
                </div>
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
                        <NavLink className={styles.NavLink} to='/rtpcr'>RTPCR</NavLink>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.icon}>
                        <img style={{ width: "24px", height: "24px", marginLeft: "14px" }} src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="" />
                        <NavLink className={styles.secondLink} to='/offers'>Offers</NavLink>
                    </div>
                    <div className={styles.icon}>
                        <img style={{ width: "24px", height: "24px", marginLeft: "14px" }} src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="" />
                        <NavLink className={styles.secondLink} to='/loginSignup'>Login/Signup</NavLink>
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