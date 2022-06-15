
import { Box, Button, Flex, Image, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import { useNavigate } from 'react-router-dom'
import styles from '../Styles/navbar.module.css'
import { IoIosArrowForward } from "react-icons/io";

const LabtestSlider = ({ data }) => {
    const navigate = useNavigate();


    const style = {
        textAlign: 'center',
        background: '#fff',
        padding: '20px 10px 15px',
        width: "280px",
        height: "221px",
        borderRadius: "5px",
        cursor: "pointer"


    };



    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div>
            <div>
                <Slide {...properties}>
                    {
                        data.map((item) => (
                            <div style={style} className={styles.labTestHover} onClick={() => navigate("/labtests")}>


                                <Box >
                                    <Image width="60px" height="60px" src={item.image} alt="" />
                                </Box>
                                <br />
                                <Box>
                                    <Text fontWeight='light' textAlign='left' marginLeft='10px' extOverflow='ellipsis' overflow="hidden" h='20px'>{item.data}</Text>

                                    <Text textAlign='justify' marginTop='5px' fontSize='13px' marginLeft='10px' fontWeight='300' height='42px' lineHeight='1.5' color='#4f585e' >{item.test}</Text>
                                    <Flex alignItems='center'>
                                        <Text>{item.price} Onwards</Text>
                                        <Spacer />
                                        <Button color='teal'>Book Now <IoIosArrowForward /> </Button>
                                    </Flex>
                                </Box>
                            </div>
                        ))
                    }
                </Slide>
            </div >
        </div >
    );
};

export default LabtestSlider;