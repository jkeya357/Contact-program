import React from 'react'
import SectionHeading from './Heading/SectionHeading'
import Card from '../Card/Card';
import jeans from '../../assets/Img/jeans.jpg';
import shirts from '../../assets/Img/shirts.jpg';
import tshirts from '../../assets/Img/tshirts.jpeg';
import dresses from '../../assets/Img/dresses.jpg';
import joggers from '../../assets/Img/joggers.jpg';
import kurtis from '../../assets/Img/kurtis.jpg';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';
import '../Sections/Heading/NewArrival.css'

const items = [{
  'title': 'Jeans',
  imagePath:jeans
},{
  'title':'Shirts',
  imagePath:shirts
},{
  'title':'T-Shirts',
  imagePath:tshirts
},{
  'title':'Dresses',
  imagePath:dresses
},
{
  'title':'Joggers',
  imagePath:joggers
},
{
  'title':'Kurtis',
  imagePath: kurtis
}]

const NewArrivals = () => {
  return (
    <div>
      <SectionHeading title={'New Arrivals'}/>
      <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={false}
          partialVisible={false}
          itemClass={'react-slider-custom-item'}
          className='px-8'
      >
        {items && items?.map((item, index) => <Card key={item.title + index} title={item.title} imagePath={item.imagePath}/>)}
     
     </Carousel>
    </div>
  )
}

export default NewArrivals
