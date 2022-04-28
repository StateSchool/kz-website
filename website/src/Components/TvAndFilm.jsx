import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from './Navbar';
import "../vanilla.css";
import { Link } from "react-router-dom";



export default function TvAndFilm() {

  // const [showText, setShowText] = useState(false);

  // const handleShow = () => {
  //   setShowText(!showText);
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // slidesToSlide: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // slidesToSlide: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return <button onClick={() => onClick()} />;
  };
  return (
    <>
      <Navbar />
      <h2 className="pl-4 mt-5 text-3xl text-lightGray md:hidden">
        TV & FILM
      </h2>
      <div className="pb-14">
        <Carousel
          responsive={responsive}
          partialVisible={false}
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
          // autoPlaySpeed={2000}
          keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <h1 className="carousel-mobile-title">George - Asda</h1>
            <img
              // onClick={handleShow}
              alt="asda advert"
              className="object-scale-down h-200 w-150 hover:bg-black"
              src="./images/ASDA-carousel.png"
            />
            {/* {showText ? (
              <p className="absolute text-center top-50 left-50">
                Please tell me this works i am not really sure what is going to
                happen but hopefully this works
              </p>
            ) : (
              <div></div>
            )} */}
            <h1 className="carousel-desktop-title">George - Asda</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Top Boy - Netflix</h1>
            <img
              alt="topboy "
              className="object-scale-down h-200 w-150 hover:bg-black"
              src="./images/Topboy-carousel.png"
            />
            <h1 className="carousel-desktop-title">Top Boy - Netflix</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Mood - BBC3</h1>
            <img
              alt="mood"
              className="object-scale-down h-200 w-150"
              src="./images/Mood-carousel.png"
            />
            <h1 className="carousel-desktop-title">Mood - BBC3</h1>
          </div>
        </Carousel>
      </div>

      <Link to={"/"} className="no-underline ">
        <div className="flex items-center px-10 pb-20 md:mt-20 ">
          <img
            src="../images/thin-left-arrow.png"
            alt="left arrow"
            className="w-8 h-8 text-jet"
          />
          <div className="back2about text-jet hover:text-lightGray">
            <h2 className="hidden md:flex px-2 my-0 about">
              TV & FILM
            </h2>
            <h2 className="hidden back hover:text-lightGray">BACK</h2>
            <h2 className=" px-2 items-center pt-2 text-lightGray md:hidden">
              BACK
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}

