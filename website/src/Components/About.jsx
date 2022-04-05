import React from 'react';
import useSound from 'use-sound'; 
import gameRetro from '../audio/audio.mp3'; 

import Navbar from './Navbar';


export default function About() {

  const [play] = useSound(gameRetro); 
  return (
    <div >
      <Navbar />
     <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h1>/kei:zi/ (kay.zee)</h1>
        <button onClick={play}> PLAY ME </button>
          
        <p>Dessert shortbread dessert ice cream cupcake apple pie dragée jujubes. Apple pie carrot cake pudding chocolate cake fruitcake sugar plum sweet roll lemon drops. Topping carrot cake jelly beans cake tiramisu sugar plum pudding. Chocolate bar cupcake bear claw lemon drops oat cake toffee toffee.</p>

        {/* <p>Tiramisu ice cream lollipop tart topping chocolate bar halvah cheesecake tiramisu. Toffee chocolate cake muffin bonbon gummi bears carrot cake marshmallow. Halvah biscuit carrot cake cotton candy topping carrot cake gummies fruitcake cupcake. Liquorice cotton candy jelly beans marzipan jelly pastry.</p> */}

        <p>Biscuit sugar plum chocolate candy powder cupcake chocolate cake halvah chocolate cake. Jelly beans gummies cheesecake shortbread cake. Bear claw sweet roll cheesecake cake cupcake cake topping jelly-o.</p>

        {/* <p>Biscuit topping icing chupa chups carrot cake liquorice pudding tootsie roll. Sweet roll muffin sweet roll lemon drops jelly carrot cake soufflé. Pie tootsie roll caramels candy canes donut apple pie wafer danish liquorice.</p>

        <p>Soufflé macaroon jelly beans cookie cookie cotton candy. Powder bonbon chocolate cake gummi bears chupa chups sesame snaps ice cream powder. Chocolate cake apple pie pie chupa chups cupcake gummi bears macaroon cotton candy. Pie gingerbread apple pie candy canes topping.</p>
         */}



         <h2 className='py-28 px-4'>ABOUT</h2>
        </div>


          <img src="../images/kzimg1.png" alt="about" />
      
        </div>

    
    </div>
  )
}
