import React from 'react'; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from './Navbar'; 
import "../vanilla.css";
import { Link } from "react-router-dom";



export default function RecordAndSong() {



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
      <h2 className="text-center mt-5 text-[23px] text-lightGray md:hidden">
        PRODUCTION & SONGWRITING
      </h2>
      <div className="pb-14 ">
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
            <h1 className="carousel-mobile-title">Amaarae</h1>
            <img
        
              alt="amarae"
              className="object-scale-down h-200 w-150 hover:bg-black"
              src="./images/Music/Amarae.png"
            />
            
            <h1 className="carousel-desktop-title">Amarae</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Kojey Radical</h1>
            <img
              alt="kojey"
              className="object-scale-down h-200 w-150"
              src="./images/Music/KojeyRadical-carousel.png"
            />

            <h1 className="carousel-desktop-title">Kojey Radical</h1>
          </div>
          <div>
            <h1 className="carousel-mobile-title">Stormzy</h1>
            <img
              alt="Stormzy"
              className="object-scale-down h-200 w-150"
              src="./images/Music/Stormzy.png"
            />
            <h1 className="carousel-desktop-title">Stormzy</h1>
          </div>
          <div>
            <h1 className="carousel-mobile-title">Wretch32</h1>
            <img
              alt="wretch"
              className="object-scale-down h-200 w-150"
              src="./images/Music/Wretch32-carousel.png"
            />
            <h1 className="carousel-desktop-title">Wretch32</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Ms Banks</h1>
            <img
              alt="ms banks"
              className="object-scale-down h-200 w-150"
              src="./images/Music/MsBanks-carousel.png"
            />
            <h1 className="carousel-desktop-title">Ms Banks</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Avelino</h1>
            <img
              alt="avelino"
              className="object-scale-down h-200 w-150"
              src="./images/Music/Avelino-carousel.png"
            />
            <h1 className="carousel-desktop-title">Avelino</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">NSG</h1>
            <img
              alt="nsg"
              className="object-scale-down h-200 w-150"
              src="./images/Music/nsg.png"
            />
            <h1 className="carousel-desktop-title">NSG</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Matt Pokora</h1>
            <img
              alt="matt pokara"
              className="object-scale-down h-200 w-150"
              src="./images/Music/MattPokora-carousel.png"
            />
            <h1 className="carousel-desktop-title">Matt Pokora</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Tion Wayne</h1>
            <img
              alt="tion wayne"
              className="object-scale-down h-200 w-150"
              src="./images/Music/tion.png"
            />
            <h1 className="carousel-desktop-title">Tion Wayne</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Nines</h1>
            <img
              alt="nines"
              className="object-scale-down h-200 w-150"
              src="./images/Music/Nines-carousel.png"
            />
            <h1 className="carousel-desktop-title">Nines</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Steff London</h1>
            <img
              alt="steff london"
              className="object-scale-down h-200 w-150"
              src="./images/Music/SteffLondon-carousel.png"
            />
            <h1 className="carousel-desktop-title">Steff London</h1>
          </div>

          <div>
            <h1 className="carousel-mobile-title">Jacob Banks</h1>
            <img
              alt="jacob banks"
              className="object-scale-down h-200 w-150"
              src="./images/Music/JacobBanks-carousel.png"
            />
            <h1 className="carousel-desktop-title">Jacob Banks</h1>
          </div>
          <div>
            <h1 className="carousel-mobile-title">Tiggz da Author</h1>
            <img
              alt="Tiggz da Author"
              className="object-scale-down h-200 w-150"
              src="./images/Music/TiggsdaAuthor.png"
            />
            <h1 className="carousel-desktop-title">Tiggz da Author</h1>
          </div>
        
          <div>
            <h1 className="carousel-mobile-title">Ray Blk </h1>
            <img
              alt="Ray Blk "
              className="object-scale-down h-200 w-150"
              src="./images/Music/RayBlk.png"
            />
            <h1 className="carousel-desktop-title">Ray Blk </h1>
          </div>
          {/* <div>
            <h1 className="carousel-mobile-title">The Prodigy</h1>
            <img
              alt="The Prodigy"
              className="object-scale-down h-200 w-150"
              src="./images/TVandFilm/Mood-carousel.png"
            />
            <h1 className="carousel-desktop-title">The Prodigy</h1>
          </div> */}
          <div>
            <h1 className="carousel-mobile-title">Professor Green</h1>
            <img
              alt="Professor Green"
              className="object-scale-down h-200 w-150"
              src="./images/Music/ProfessorGreen.png"
            />
            <h1 className="carousel-desktop-title">Professor Green</h1>
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
            <h2 className="hidden md:flex px-2 my-0 about">PRODUCTION & SONGWRITING</h2>
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
