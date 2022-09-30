
import { Box, Image, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import { useNavigate } from 'react-router-dom'

const products = [
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/7e5e174fdfb-OneTouchWeb.jpg?dim=146x0&dpr=1&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/e8c11c3d8e1-Wellman_Dweb.jpg?dim=146x0&dpr=1&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/e8c11c3d8e1-Wellman_Dweb.jpg?dim=146x0&dpr=1&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/bf633425db6-web_johnson.jpg?dim=146x0&dpr=1&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/db82ec1a424-web_Curatio.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/93092a81f8d-Featured-banner_Digine.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/9d406684215-Featured-brand_web_Plum.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/9d406684215-Featured-brand_web_Plum.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/0e3affec097-The_Natural_Wash_Dweb.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/f8493a13be2-web_Pigeon.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/f8493a13be2-web_Pigeon.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/0845572266f-Everherb.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    },
    {
        avator: "https://cms-contents.pharmeasy.in/carousel_item/22256dfc61d-web_Themomosco.jpg?dim=146x0&dpr=2&q=100",
        title: ""
    }
]

const ProductSlider = () => {
    const navigate = useNavigate();


    const style = {
        textAlign: 'center',
        background: '#fff',
        width: "140px",
        height: "203px",
        display: "flex",
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
                    slidesToShow: 8,
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
                        products.map((item) => (
                            <div key={Math.random() * 1000} style={style} onClick={() => navigate("/healthcareProducts")}>


                                <Box >
                                    <Image width="140px" height="203px" src={item.avator} alt="" />
                                </Box>

                            </div>
                        ))
                    }
                </Slide>
            </div>
        </div>
    );
};

export default ProductSlider;