import React from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import gameRetro from '../audio/audio.mp3';
import Navbar from './Navbar';
import '../vanilla.css'




export default function About() {

  const [play] = useSound(gameRetro);
  return (
    <div className='pb-20 md:absolute md:pb-0' >
      <Navbar />
      <div className='grid grid-cols-1  md:grid-cols-2  '>
        <div className=''>
          <div className='px-10 pt-20 pb-6 flex items-center'>
            <h1>/kei:zi/ (kay.zee)</h1>
            <button onClick={play} className="px-3"> <img src="../images/speaker.png" alt="speaker" className="w-6" /></button>  
          </div>
          
          

          <p className="px-10">English producer KZ is no stranger to the music industry. Influenced by artists such as John Mayer, Pharrell Williams or Prince, the English artist is painting a colourful and unique sound that conquered the UK and other places around the world. Over the years, he worked with Emeli Sandé, Professor Green, Avelino, Kojey Radical, Wretch 32, Jacob Banks, K Michelle, Jeremih, and many more. <br/> <br/><a href="https://www.threadofficial.com/stories/2018/10/16/kz" className='no-underline text-black'><span className='flex justify-end pr-2 italic md:pr-6'>- Thread</span></a></p>

          {/* <p>Tiramisu ice cream lollipop tart topping chocolate bar halvah cheesecake tiramisu. Toffee chocolate cake muffin bonbon gummi bears carrot cake marshmallow. Halvah biscuit carrot cake cotton candy topping carrot cake gummies fruitcake cupcake. Liquorice cotton candy jelly beans marzipan jelly pastry.</p> */}

          {/* <p className="px-10">Biscuit sugar plum chocolate candy powder cupcake chocolate cake halvah chocolate cake. Jelly beans gummies cheesecake shortbread cake. Bear claw sweet roll cheesecake cake cupcake cake topping jelly-o.</p> */}


          <Link to={"/"} className="no-underline ">
            
        <div className='flex items-center px-10 mt-20 '>
          
              <img src="../images/thin-left-arrow.png" alt="left arrow" className='w-8 h-8 text-jet' />
              <div className="back2about text-jet hover:text-lightGray">
                <h2 className="px-2 my-0 about">ABOUT</h2>
                <h2 className="back hover:text-lightGray">BACK</h2>
              </div>
              
            </div>
          </Link>
          
          
        </div>


        <img src="../images/kzimg1.png" alt="about"  className='-mt-10 md:-mt-10  '/>

      </div>

        

    </div>
  )
}
