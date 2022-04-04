import React from 'react'

export default function Header() {
    return (
     
    <div>
        <nav className=' pt-1 '>
            <ul className='flex justify-between items-center px-3 pt-1 pb-2'>
            <li>
              <a href="/Home" className='no-underline text-jet'>KZ</a> 
            </li>
              <li className='text-jet'>Contact</li>
            </ul>
        </nav>
    </div>
    
  )
}
