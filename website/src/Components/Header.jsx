import React from 'react'; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Header() {

 
    return (
     
    <div>
        <nav className='pt-1 '>
            <ul className='flex justify-between items-center px-3 pt-1 pb-2 md:px-5'>
            <li>
              <a href="/" className='no-underline text-jet text-3xl hover:text-lightGray'>KZ</a> 
            </li>
            <Popup contentStyle={{ width: "200px", height: "50px", border: "2px solid #BDBBB0", fontFamily: "Lexend Deca,sans-serif", color:"#BDBBB0"}}trigger={<button className='text-jet'> Contact </button>} position="left center">
              <div className='pl-4 py-1'><a href="mailto:kzdidit@gmail.com" className='no-underline text-middleGray hover:text-lightGray'> KzDidIt@gmail.com</a></div>
              </Popup>
            </ul>
        </nav>
    </div>
    
  )
}
