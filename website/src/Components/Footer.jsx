import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="absolute bottom-0 w-full height-[2.5rem] text-Jet ">
        <ul className="pl-0 text-xs flex justify-center pt-3 md:text-lg">
          <li className="mx-3" href="">
            {" "}
            SoundCloud
          </li>
          <li className="mx-3" href="">
            {" "}
            Spotify
          </li>
          <li className="mx-3" href="">
            {" "}
            Instagram
          </li>
        </ul>
        <p className=" text-xs flex justify-center -mt-3 md:text-lg">Copyright &copy; 2022</p>
        <p className=" text-[10px] flex justify-center text-xs text-cultured md:text-xs">Designed by State School</p>
      </div>
    </div>
  );
}
