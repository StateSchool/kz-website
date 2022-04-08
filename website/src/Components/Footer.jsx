import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="absolute bottom-0 w-full height-[2.5rem] text-Jet ">
        <ul className="pl-0 text-xs flex justify-center pt-3 md:text-lg ">
          <li className="mx-3">
           
            <a href="https://soundcloud.com/mrzeenius" className='footer' target="_blank" >SoundCloud</a>
          </li>

          <li className="mx-3">
            <a href="https://open.spotify.com/artist/43klgjUMIjnLs6b94vSK9G" className='footer' target="_blank" >Spotify</a>
          </li>

          <li className="mx-3">
            <a href="https://www.instagram.com/kzdidit/" className='footer' target="_blank">
              Instagram
            </a>
          </li>
        </ul>
        <p className=" text-xs flex justify-center -mt-3 md:text-sm md:mb-1 ">Copyright &copy; 2022</p>
        <p className=" text-[10px] flex justify-center text-xs text-cultured md:text-xs md:mb-2 lg:mt-1 lg:mb-1">Designed by State School</p>
      </div>
    </div>
  );
}
