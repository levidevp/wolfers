import Card from '@/components/card/Card.jsx'
import CarouselComponent from '@/components/carousel/Carousel'
import Learn from '@/components/learn/Learn'
import React from 'react'

const index = () => {
  return (
    <div className='dark:bg-slate-950'>
      <CarouselComponent/>
      <br/>
      <Learn/>
 <br/>
 <Card/>
    </div>
  )
}

export default index