
import { Box, Image, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import { useNavigate } from 'react-router-dom'
const SliderSmall = ({ data }) => {
    const navigate = useNavigate();


    const style = {
        textAlign: 'center',
        background: '#fff',
        padding: '20px',
        width: "294px",
        height: "107px",
        display: "flex",
        border: "1px solid #4f585e",
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
                            <div style={style} onClick={() => navigate("/offers")}>


                                <Box >
                                    <Image width="255px" height="70px" src={item.img} alt="" />
                                </Box>
                                <Box>
                                    <Text textAlign='justify' fontSize='13px' marginLeft='10px' extOverflow='ellipsis' overflow="hidden" fontWeight='300' height='42px' lineHeight='1.5' color='#4f585e' w='190px'>{item.discount}</Text>
                                    <Text fontWeight='light' textAlign='left' marginLeft='10px'>code : {item.Code}</Text>
                                </Box>
                            </div>
                        ))
                    }
                </Slide>
            </div>
        </div>
    );
};

export default SliderSmall;