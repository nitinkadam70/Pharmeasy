import { Box, Image, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router-dom';

const SlideShowOrederPage = ({ data }) => {
  const navigate = useNavigate();

  const style = {
    textAlign: 'center',
    background: '#fff',
    display: 'flex',
    cursor: 'pointer',
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
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          {data.map((item) => (
            <div key={Math.random() * 1000} style={style}>
              <Box>
                <Image width="auto" height="auto" src={item} alt="" />
              </Box>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default SlideShowOrederPage;
