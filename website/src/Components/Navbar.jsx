import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <div>
        
       <div>
        <nav className='pt-1 '>
            <ul className='flex justify-between items-center px-3 pt-1 pb-2 md:px-5'>
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
                    <Popup contentStyle={{ width: "200px", height: "50px", border: "2px solid #BDBBB0", fontFamily: "Lexend Deca,sans-serif", color:"#BDBBB0"}}trigger={<button className='text-jet'> Contact </button>} position="left center">
                    <div className='pl-4 py-1'><a href="mailto:kzdidit@gmail.com" className='no-underline text-middleGray hover:text-lightGray'> KzDidIt@gmail.com</a></div>
                    </Popup>
                </div>         
            </ul>
        </nav>
    </div>
          

    </div>
  )
}
