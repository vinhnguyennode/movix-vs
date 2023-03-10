import React, { useRef } from "react";
import './carousel.scss';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadingImage/Img";
import PosterFallback from "../../assets/no-poster.png";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  console.log(carouselContainer.current)
  return (
    <div ref={carouselContainer}>Carousel</div>
  )
}

export default Carousel