import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/navbar.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import ProductSimple from './CardsCss';

const MedocomeSlider = ({ data }) => {
  const navigate = useNavigate();

  const style = {
    textAlign: 'center',
    background: '#fff',
    padding: '20px 10px 15px',
    width: '280px',
    borderRadius: '5px',
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
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          {data.map((item) => (
            <div
              key={Math.random() * 1000}
              style={style}
              onClick={() => navigate('/ProductPage')}
            >
              <ProductSimple {...item} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default MedocomeSlider;
