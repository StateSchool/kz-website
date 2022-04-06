import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleOpen = () => {
    setNavBarOpen(!navBarOpen)
  };

  const handleClose = () => {
    setNavBarOpen(navBarOpen)
  };

  return (
    <div>

      <div>
        <nav className='pt-1 '>
          <ul className='hidden md:flex justify-between items-center px-3 pt-1 pb-2 md:px-5'>
            <div className='flex justify-between items-center' >
              <li>
                <Link to={"/"} className="no-underline text-jet text-3xl hover:text-lightGray">KZ</Link>
              </li>
              <Link to={"/About"} className="nav-links"><li>About</li></Link>
              <Link to={"/RecordAndSong"} className="nav-links"><li>Production & Song Writing</li></Link>
              <Link to={"/TvAndFilm"} className="nav-links"><li>TV & Film</li></Link>
              <Link to={"/Publishing"} className="nav-links"><li>Publishing</li></Link>
            </div>
            <div>
              <Popup contentStyle={{ width: "200px", height: "50px", border: "2px solid #BDBBB0", fontFamily: "Lexend Deca,sans-serif", color: "#BDBBB0" }} trigger={<button className='text-jet'> Contact </button>} position="left center">
                <div className='pl-4 py-1'><a href="mailto:kzdidit@gmail.com" className='no-underline text-middleGray hover:text-lightGray'> KzDidIt@gmail.com</a></div>
              </Popup>
            </div>
          </ul>


        </nav>




        {/*------------------- MOBILE NAV ------------------------- */}
        <nav className='pt-1 flex justify-between px-3 md:hidden'>

          <Link to={"/"} className="no-underline text-jet text-3xl hover:text-lightGray">KZ</Link>

          <button onClick={handleOpen} className="relative">
            {navBarOpen ? <ul className=' absolute right-0 top-0 px-3  pt-1 pb-2 md:px-5 bg-white w-screen h-screen'>

              <img src="../images/icons8-close.png" alt="close" className='w-8 py-1 pl-3' />
              <div className='items-center py-2' >



                <Link to={"/About"} className="nav-links"><li>About</li></Link>
                <Link to={"/RecordAndSong"} className="nav-links"><li>Production & Song Writing</li></Link>
                <Link to={"/TvAndFilm"} className="nav-links"><li>TV & Film</li></Link>
                <Link to={"/Publishing"} className="nav-links"><li>Publishing</li></Link>
              </div>
              <div>
                <Popup contentStyle={{ width: "200px", height: "50px", border: "2px solid #BDBBB0", fontFamily: "Lexend Deca,sans-serif", color: "#BDBBB0" }} trigger={<button className='text-jet'> Contact </button>} position="left center">
                  <div className='pl-4 py-1'><a href="mailto:kzdidit@gmail.com" className='no-underline text-middleGray hover:text-lightGray'> KzDidIt@gmail.com</a></div>
                </Popup>
              </div>


            </ul> : <div></div>}


            <img src="../images/icons8-hamburger.png" alt="menu" className='w-8' />
          </button>
        </nav>

      </div>


    </div>
  )
}
