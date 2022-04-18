import React from 'react'
import {
  Link} from 'react-router-dom';
import Navbar from './Navbar'

export default function Publishing() {
  return (
   
    <div>
      <Navbar />
      <div className='grid grid-cols-1  md:grid-cols-2  '>
        <div className=''>
          <div className='px-10 pt-20 pb-6 flex items-center'>
            <h1>TryBe </h1>
          </div>
          <p className="px-10">Dessert shortbread dessert ice cream cupcake apple pie dragée jujubes. Apple pie carrot cake pudding chocolate cake fruitcake sugar plum sweet roll lemon drops. Topping carrot cake jelly beans cake tiramisu sugar plum pudding. Chocolate bar cupcake bear claw lemon drops oat cake toffee toffee.</p>

          {/* <p>Tiramisu ice cream lollipop tart topping chocolate bar halvah cheesecake tiramisu. Toffee chocolate cake muffin bonbon gummi bears carrot cake marshmallow. Halvah biscuit carrot cake cotton candy topping carrot cake gummies fruitcake cupcake. Liquorice cotton candy jelly beans marzipan jelly pastry.</p> */}

          <p className="px-10">Biscuit sugar plum chocolate candy powder cupcake chocolate cake halvah chocolate cake. Jelly beans gummies cheesecake shortbread cake. Bear claw sweet roll cheesecake cake cupcake cake topping jelly-o.</p>

          {/* <p className="px-10">Biscuit topping icing chupa chups carrot cake liquorice pudding tootsie roll. Sweet roll muffin sweet roll lemon drops jelly carrot cake soufflé. Pie tootsie roll caramels candy canes donut apple pie wafer danish liquorice.</p>

          <p className="px-10">Soufflé macaroon jelly beans cookie cookie cotton candy. Powder bonbon chocolate cake gummi bears chupa chups sesame snaps ice cream powder. Chocolate cake apple pie pie chupa chups cupcake gummi bears macaroon cotton candy. Pie gingerbread apple pie candy canes topping.</p> */}


          <Link to={"/"} className="no-underline ">

            <div className='flex items-center px-10 mt-20 '>

              <img src="../images/thin-left-arrow.png" alt="left arrow" className='w-8 h-8 text-jet' />
              <div className="back2about text-jet hover:text-lightGray">
                <h2 className="px-2 my-0 about">PUBLISHING</h2>
                <h2 className="back hover:text-lightGray">BACK</h2>
              </div>

            </div>
          </Link>


        </div>


        <img src="../images/kzimg1.png" alt="about" className='-mt-10 md:-mt-10  ' />

      </div>
    </div>
  )
}
