import React from 'react'
import { Flex, FooterLayout, Heddline, P, Para, ImageP, IconSocial } from './Styled'
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    return (
        <FooterLayout>
            <Flex >
                <div>
                    <Heddline>Company</Heddline>
                    <P>About Us</P>
                    <P>Careers</P>
                    <P>Blog</P>
                    <P>Partner with PharmEasy</P>
                    <P>Sell at ParmEasy</P>
                    <Heddline>Our Services</Heddline>
                    <P>Order Medicine</P>
                    <P>Healthcare Products</P>
                    <P>Lab Tests</P>
                    <P>Find Nearest Collection Centre</P>
                </div>
                <div>
                    <Heddline>Featured Categories</Heddline>
                    <P>Personal Care</P>
                    <P>Health Food and Drinks</P>
                    <P>Skin Care</P>
                    <P>Home Care</P>
                    <P>Ayurvedic Care</P>
                    <P>Sexual Wellness</P>
                    <P>Fitness & Supplements</P>
                    <P>Mother and Baby Care</P>
                    <P>Healthcare Devices</P>
                    <P>Surgicals and Dressings</P>
                    <P>Covid Essentials</P>
                    <P>Health Condition</P>
                    <P>Diabetic Care</P>
                    <P>Elderly Care</P>
                    <P>Accessories And Wearables</P>
                    <P>Beauty</P>
                </div>
                <div>
                    <Heddline>Need Help</Heddline>
                    <P>Browse All Medicines</P>
                    <P>Browse ALl Cities & Areas</P>
                    <P>FAQs</P>
                    <P>Instagram</P>
                    <Heddline>Policy Info</Heddline>
                    <P>Editorial Policy</P>
                    <P>Privacy Policy</P>
                    <P>Vulnerability Disclosure Policy</P>
                    <P>Terms and Conditions</P>
                    <P>Customer Support Policy</P>
                    <P>Return Policy</P>

                </div>

                <div >
                    <Heddline>FOLLOW US</Heddline>
                    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                        <IconSocial style={{ display: "flex", gap: "20px", alignItems: "center", padding: "0px 10px" }}><BsInstagram style={{ width: "50px" }} /></IconSocial>
                        <IconSocial style={{ display: "flex", gap: "20px", alignItems: "center", padding: "0px 10px" }}><FaFacebookF style={{ width: "50px" }} /></IconSocial>
                        <IconSocial style={{ display: "flex", gap: "20px", alignItems: "center", padding: "0px 10px" }}><BsYoutube style={{ width: "50px" }} /></IconSocial>
                        <IconSocial style={{ display: "flex", gap: "20px", alignItems: "center", padding: "0px 10px" }}><BsTwitter style={{ width: "50px" }} /></IconSocial>
                    </div>
                </div>
            </Flex>
            <div>
                <Heddline style={{ padding: "0px 0px 0px 150px" }}>Our payment partners</Heddline>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'right' }}>
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg" alt="" />
                    <ImageP src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg" alt="" />
                    <ImageP src="	https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg" alt="" />
                    <Para>© 2022 PharmEasy. All Rights Reserved</Para>
                </div>
            </div>

        </FooterLayout>
    )
}

export default Footer