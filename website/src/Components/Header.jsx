import React from 'react'

export default function Header() {
    return (
     
    <div>
        <nav className='pt-1 '>
            <ul className='flex justify-between items-center px-3 pt-1 pb-2 md:px-5'>
            <li>
              <a href="/" className='no-underline text-jet text-3xl'>KZ</a> 
            </li>
              <li className='text-jet'>Contact</li>
            </ul>
        </nav>
    </div>
    
  )
}
