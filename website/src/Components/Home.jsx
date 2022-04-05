import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../vanilla.css'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Header from './Header';




export default function Home() {

  const [displayArrow, setDisplayArrow] = useState(false);
  
  // const showArrow = e => {
  //   e.preventDefault();
  //   setDisplay("displayed")
  // };

  // const hideArrow = e => {
  //   e.preventDefault();
  //   setDisplay("notdisplayed");
  //}

  return (
    <div>
      <Header />
      <ul className="text-2xl text-center py-5 pl-0 md:mt-24 md:text-6xl lg:mt-52 xl:mt-10 2xl:mt-24">
        <Link to={"/About"} className="no-underline nav-text tracking-widest ">
          <li className="mb-10 pb-2 text-middleGray">
            <div className="flex justify-center items-center">
              <span className="rotated">A</span>
              <span className="rotated">B</span>
              <span className="rotated">O</span>
              <span className="rotated">U</span>
              <span className="rotated">T</span>

              <img
                src="../images/thin-right-arrow.png"
                alt="arrow"
                className="arrow w-14 mx-4"
              />

              {/* {displayArrow ? (<img src="../images/thin-right-arrow.png" alt='arrow' onMouseEnter={(e) => setDisplayArrow(true)} />) :
                <div onMouseLeave={(e) => setDisplayArrow(false)}>
                
                </div>} */}
              {/* {
                display ? (< ArrowForwardIcon fontSize='inherit' onMouseEnter={(e) => setDisplay(true)} />) :
                    <div onMouseLeave={(e) => setDisplay(false)}/>
                  }  */}
            </div>
          </li>
        </Link>

        <Link
          to={"/RecordAndSong"}
          className="no-underline nav-text tracking-widest"
        >
          <li className="my-14 text-middleGray text-1xl  md:text-6xl">
            <div className="px-5 xl:flex justify-center items-center">
              {/* <span className="rotated">R</span>
            <span className="rotated">E</span>
            <span className="rotated">C</span>
            <span className="rotated">O</span>
            <span className="rotated">R</span>
            <span className="rotated">D</span>
            <span className="rotated"> </span> */}

              <span className="rotated">P</span>
              <span className="rotated">R</span>
              <span className="rotated">O</span>
              <span className="rotated">D</span>
              <span className="rotated">U</span>
              <span className="rotated">C</span>
              <span className="rotated">T</span>
              <span className="rotated">I</span>
              <span className="rotated">O</span>
              <span className="rotated">N</span>
              <span className="rotated"> </span>
              <span className="rotated md:text-7xl">&</span>
              <span className="rotated"> </span>
              <span className="rotated">S</span>
              <span className="rotated">O</span>
              <span className="rotated">N</span>
              <span className="rotated">G</span>
              <span className="rotated"> </span>
              <span className="rotated">W</span>
              <span className="rotated">R</span>
              <span className="rotated">I</span>
              <span className="rotated">T</span>
              <span className="rotated">I</span>
              <span className="rotated">N</span>
              <span className="rotated">G</span>

                <img src="../images/thin-right-arrow.png" alt="arrow" className="arrow w-14 mx-4" />
            </div>
          </li>
        </Link>

        <Link
          to={"/TvAndFilm"}
          className="no-underline nav-text tracking-widest"
        >
          <li className="my-14 text-middleGray">
            <div className="flex justify-center items-center">
              <span className="rotated">T</span>
              <span className="rotated">V</span>
              <span className="rotated"> </span>
              <span className="rotated md:text-7xl">&</span>
              <span className="rotated"> </span>
              <span className="rotated">F</span>
              <span className="rotated">I</span>
              <span className="rotated">L</span>
              <span className="rotated">M</span>
              <img src="../images/thin-right-arrow.png" alt="arrow" className="arrow w-14 mx-4"/>
            </div>
          </li>
        </Link>

        <Link
          to={"/Publishing"}
          className="no-underline nav-text tracking-widest"
        >
          <li className="my-14 text-middleGray">
            <div className="flex justify-center items-center">
              <span className="rotated">P</span>
              <span className="rotated">U</span>
              <span className="rotated">B</span>
              <span className="rotated">L</span>
              <span className="rotated">I</span>
              <span className="rotated">S</span>
              <span className="rotated">H</span>
              <span className="rotated">I</span>
              <span className="rotated">N</span>
              <span className="rotated">G</span>
              <img src="../images/thin-right-arrow.png" alt="arrow" className="arrow w-14 mx-4"/>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

            