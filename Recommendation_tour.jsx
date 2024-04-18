import React from 'react'
import tour_data from '../recommendation_tour'
import Item from '../Item';

const Recommendation_tour = () => {
  return (
    <div className='popular container mx-auto px-4'>
      <h1 className='text-2xl font-bold my-4'>Recommendation for Tours</h1>
      <hr className='my-4' />
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {tour_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} nights={item.nights} days={item.days} />
            })}
      </div>
    </div>
  )
}

export default Recommendation_tour
