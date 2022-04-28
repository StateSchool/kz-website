import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

export default function Publishing() {
  return (
    <div>
      <Navbar />
      <h1 className="px-7  mt-5 text-lightGray md:hidden">PUBLISHING</h1>
      <div className="grid grid-cols-1  md:grid-cols-2  ">
        <div className="">
          <div className="px-7 md:px-6 pt-10 pb-6 flex items-center">
            <h1>TRYB </h1>
          </div>
          <p className="px-8">
            TRYB, A publishing/Entertainment company done right! TRYB is a new
            progressive publishing house set up by creatives FOR creatives.
            Headed by Record producer and songwriter KZ and Record Exec and
            Manager Ashley Sky. TRYB’s mission is simply to get the creative
            into places and position of opportunity and power, we are all about
            elevating and expanding upon the visions of the writers we sign. We
            believe transparency, fairness and honesty are at the root of what
            good business looks in this new evolving space we call the
            entertainment industry. To long have artist and writers been
            exploited by the lack of information and access to how the industry
            operates until its too late.
          </p>

          <p className="px-8">
            TRYB is committed to changing that practice by offering sensible
            deals that allow the artist plenty of room for growth, By
            understanding their taste and matching them to the best of our
            abilities with the right sessions, meetings and opportunities. TRYB
            is also committed to exploring new forms of collaboration for
            recoupment such as music libraries, NFT’S, Scoring and sound track
            production and sonics for the metavers. As a Progressive platform,
            TRYB uses their extensive network & resource to reach out
            particularly to talent from marginalised countries and backgrounds
            most importantly Women, Black, brown & people of colour.
          </p>

          <p className="px-8">
            As the pandemic brought the entire world to a stand still it also
            brought an opportunity to reflect. A moment to reflect on what isn’t
            working in our world but also in our music industry. Upon such
            reflection, TRYB was born. Born to help re-shape the industry as we
            know it. Dedicated to using their extensive network in France,
            Africa , LA and The UK to pool together their resources to combat
            inequality within music and the music business. We believe in
            Ethical business, Authenticity and big impactful songs.
          </p>

          <Link to={"/"} className="no-underline ">
            <div className="flex items-center px-10 pb-20 md:mt-20 ">
              <img
                src="../images/thin-left-arrow.png"
                alt="left arrow"
                className="w-8 h-8 text-jet"
              />
              <div className="back2about text-jet hover:text-lightGray">
                <h2 className="hidden md:flex px-2 my-0 about">PUBLISHING</h2>
                <h2 className="hidden back hover:text-lightGray">BACK</h2>
                <h2 className=" px-2 items-center pt-2 text-lightGray md:hidden">
                  BACK
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
