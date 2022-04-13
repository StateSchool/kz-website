import React from 'react'; 
import Carousel from 'react-elastic-carousel'; 
import Navbar from './Navbar'; 
import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 }, 
  { width: 550, itemsToShow: 2 }, 
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4}, 
];

export default function RecordAndSong() {
  return (
    <div>
      <Navbar />
      <h1>Record and songs</h1>
      <Carousel breakPoints={breakPoints}> 
        <Item> One </Item>
        <Item> One </Item>
        <Item> One </Item>
        <Item> One </Item>
        <Item> One </Item>
      </Carousel>
    </div>
  )
}
