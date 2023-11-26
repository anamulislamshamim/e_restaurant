import React from 'react'
import Card from './Card'

const cardData = [
    {
        title1: "Sun's Out, BOGO's Out",
        title2: "Through 8/26",
        img: "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title1: "New Restaurants",
        title2: "Added Daily",
        img: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title1: "We Delivery Desserts",
        title2: "Tasty Treats",
        img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card  */}
        { cardData.map((card, idx) => (
            <Card key={idx} {...card} />
        )) }
    </div>
  )
}

export default HeadlineCards